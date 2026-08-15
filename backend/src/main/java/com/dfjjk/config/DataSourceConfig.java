package com.dfjjk.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.util.StringUtils;

import javax.sql.DataSource;
import java.net.URI;

@Configuration
public class DataSourceConfig {

    private static final Logger log = LoggerFactory.getLogger(DataSourceConfig.class);

    @Value("${SPRING_DATASOURCE_URL:${spring.datasource.url:jdbc:postgresql://localhost:5432/dfjjkglobal}}")
    private String rawUrl;

    @Value("${SPRING_DATASOURCE_USERNAME:${spring.datasource.username:postgres}}")
    private String envUsername;

    @Value("${SPRING_DATASOURCE_PASSWORD:${spring.datasource.password:postgres}}")
    private String envPassword;

    @Bean
    @Primary
    public DataSource dataSource() {
        String url = rawUrl;
        String finalUser = envUsername;
        String finalPass = envPassword;

        if (StringUtils.hasText(url)) {
            String tempUrl = url;
            if (tempUrl.startsWith("jdbc:")) {
                tempUrl = tempUrl.substring(5);
            }
            if (tempUrl.startsWith("postgres://")) {
                tempUrl = "postgresql://" + tempUrl.substring("postgres://".length());
            }

            try {
                URI uri = URI.create(tempUrl);
                if (uri.getHost() != null) {
                    String host = uri.getHost();
                    int port = uri.getPort() > 0 ? uri.getPort() : 5432;
                    String path = uri.getPath() != null ? uri.getPath() : "";
                    String query = uri.getQuery();

                    // Extract user credentials if embedded in URI authority (user:pass@host)
                    if (uri.getUserInfo() != null) {
                        String[] userInfo = uri.getUserInfo().split(":", 2);
                        finalUser = userInfo[0];
                        if (userInfo.length > 1) {
                            finalPass = userInfo[1];
                        }
                    }

                    StringBuilder cleanJdbcUrl = new StringBuilder("jdbc:postgresql://");
                    cleanJdbcUrl.append(host).append(":").append(port).append(path);
                    if (StringUtils.hasText(query)) {
                        cleanJdbcUrl.append("?").append(query);
                    }

                    url = cleanJdbcUrl.toString();
                }
            } catch (Exception e) {
                log.warn("Could not parse URI for credentials extraction, keeping raw URL: {}", e.getMessage());
            }
        }

        log.info("Cleaned JDBC DataSource URL: {}", url);
        log.info("DataSource Username: {}", finalUser);

        DataSourceBuilder<?> builder = DataSourceBuilder.create()
                .driverClassName("org.postgresql.Driver")
                .url(url);

        if (StringUtils.hasText(finalUser)) {
            builder.username(finalUser);
        }
        if (StringUtils.hasText(finalPass)) {
            builder.password(finalPass);
        }

        return builder.build();
    }
}

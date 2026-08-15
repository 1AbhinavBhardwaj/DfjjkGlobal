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

@Configuration
public class DataSourceConfig {

    private static final Logger log = LoggerFactory.getLogger(DataSourceConfig.class);

    @Value("${SPRING_DATASOURCE_URL:${spring.datasource.url:jdbc:postgresql://localhost:5432/dfjjkglobal}}")
    private String rawUrl;

    @Value("${SPRING_DATASOURCE_USERNAME:${spring.datasource.username:postgres}}")
    private String username;

    @Value("${SPRING_DATASOURCE_PASSWORD:${spring.datasource.password:postgres}}")
    private String password;

    @Bean
    @Primary
    public DataSource dataSource() {
        String jdbcUrl = rawUrl;

        // Convert standard URI (postgres:// or postgresql://) to JDBC format (jdbc:postgresql://)
        if (StringUtils.hasText(jdbcUrl)) {
            if (jdbcUrl.startsWith("postgres://")) {
                jdbcUrl = "jdbc:postgresql://" + jdbcUrl.substring("postgres://".length());
            } else if (jdbcUrl.startsWith("postgresql://")) {
                jdbcUrl = "jdbc:postgresql://" + jdbcUrl.substring("postgresql://".length());
            }
        }

        log.info("Configured JDBC DataSource URL: {}", jdbcUrl != null ? jdbcUrl.replaceAll(":[^/@]+@", ":****@") : "null");

        DataSourceBuilder<?> builder = DataSourceBuilder.create()
                .driverClassName("org.postgresql.Driver")
                .url(jdbcUrl);

        if (StringUtils.hasText(username) && !"postgres".equals(username)) {
            builder.username(username);
        }
        if (StringUtils.hasText(password) && !"postgres".equals(password)) {
            builder.password(password);
        }

        return builder.build();
    }
}

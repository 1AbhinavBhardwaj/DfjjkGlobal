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
import java.io.File;

@Configuration
public class DataSourceConfig {

    private static final Logger log = LoggerFactory.getLogger(DataSourceConfig.class);

    @Value("${spring.datasource.url:jdbc:h2:file:./data/dfjjkdb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE;AUTO_SERVER=TRUE}")
    private String url;

    @Value("${spring.datasource.username:sa}")
    private String username;

    @Value("${spring.datasource.password:}")
    private String password;

    @Value("${spring.datasource.driver-class-name:org.h2.Driver}")
    private String driverClassName;

    @Bean
    @Primary
    public DataSource dataSource() {
        // Ensure the ./data directory exists for persistent file storage
        try {
            File dataDir = new File("./data");
            if (!dataDir.exists()) {
                boolean created = dataDir.mkdirs();
                if (created) {
                    log.info("Created persistent H2 database directory: {}", dataDir.getAbsolutePath());
                }
            }
        } catch (Exception e) {
            log.warn("Could not pre-create data directory, H2 will create file if allowed: {}", e.getMessage());
        }

        log.info("Initializing persistent H2 DataSource with URL: {}", url);

        DataSourceBuilder<?> builder = DataSourceBuilder.create()
                .driverClassName(driverClassName)
                .url(url);

        if (StringUtils.hasText(username)) {
            builder.username(username);
        }
        if (StringUtils.hasText(password)) {
            builder.password(password);
        }

        return builder.build();
    }
}

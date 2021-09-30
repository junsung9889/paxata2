package com.paxata2.backend.web.config;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import com.paxata2.backend.web.job.SampleJob;
import org.quartz.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.quartz.QuartzDataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;
import org.springframework.scheduling.quartz.SpringBeanJobFactory;

@Configuration
@EnableAutoConfiguration
@ConditionalOnExpression("'${using.spring.schedulerFactory}'=='true'")
public class SpringQrtzScheduler {

    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private ApplicationContext applicationContext;

    @PostConstruct
    public void init() {
        logger.info("Hello world from Spring...");
    }

    @Bean
    public SpringBeanJobFactory springBeanJobFactory() {
        AutowiringSpringBeanJobFactory jobFactory = new AutowiringSpringBeanJobFactory();
        logger.debug("Configuring Job factory");

        jobFactory.setApplicationContext(applicationContext);
        return jobFactory;
    }

    @Bean
    public SchedulerFactoryBean scheduler( DataSource quartzDataSource) {

        SchedulerFactoryBean schedulerFactory = new SchedulerFactoryBean();
        schedulerFactory.setConfigLocation(new ClassPathResource("quartz.properties"));

        logger.debug("Setting the Scheduler up");
        schedulerFactory.setJobFactory(springBeanJobFactory());
        schedulerFactory.setDataSource(quartzDataSource);

        return schedulerFactory;
    }



    @Bean
    @QuartzDataSource
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource quartzDataSource() {
        return DataSourceBuilder.create().build();
    }

}

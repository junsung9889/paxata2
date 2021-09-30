package com.paxata2.backend.web.job;

import lombok.SneakyThrows;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.FileInputStream;

@Component
public class SampleJob implements Job {

    Logger logger = LoggerFactory.getLogger(getClass());

    @SneakyThrows
    public void execute(JobExecutionContext context) throws JobExecutionException {

        logger.info("Job ** {} ** fired @ {}", context.getJobDetail().getKey().getName(), context.getFireTime());
        String uri = context.getJobDetail().getJobDataMap().getString("url");
        File file = new File(uri);
        MultipartFile multipartFile = new MockMultipartFile(file.getName(), file.getName(), "txt/plain", new FileInputStream(file));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        headers.setBasicAuth("superuser", "superuser");

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("data", multipartFile.getResource());
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        RestTemplate restTemplate = new RestTemplate();
        restTemplate.postForEntity("http://220.220.220.80:8000/rest/datasource/imports/local?name=" + file.getName()
        , requestEntity, String.class);

        logger.info("Next job scheduled @ {}", context.getNextFireTime());
    }
}
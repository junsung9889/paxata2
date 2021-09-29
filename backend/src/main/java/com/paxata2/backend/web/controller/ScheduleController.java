package com.paxata2.backend.web.controller;

import com.paxata2.backend.web.dto.ApiResponse;
import com.paxata2.backend.web.dto.JobRequest;
import com.paxata2.backend.web.job.SampleJob;
import com.paxata2.backend.web.service.ScheduleService;
import org.quartz.JobKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {
    @Autowired
    private ScheduleService scheduleService;

    @RequestMapping(value = "/job", method = RequestMethod.POST)
    public ResponseEntity<?> addScheduleJob(@ModelAttribute JobRequest jobRequest) {
        if (jobRequest.getJobName() == null) {
            return new ResponseEntity<>(new ApiResponse(false, "Require jobName"),
                    HttpStatus.BAD_REQUEST);
        }

        JobKey jobKey = new JobKey(jobRequest.getJobName(), jobRequest.getJobGroup());
        if (!scheduleService.isJobExists(jobKey)) {
            if (jobRequest.getCronExpression() == null) {
                scheduleService.addJob(jobRequest, SampleJob.class);
            }
        } else {
            return new ResponseEntity<>(new ApiResponse(false, "Job already exits"),
                    HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse(true, "Job created successfully"), HttpStatus.CREATED);
    }
}

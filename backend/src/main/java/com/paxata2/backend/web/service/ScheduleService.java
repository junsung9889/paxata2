package com.paxata2.backend.web.service;

import com.paxata2.backend.web.dto.JobRequest;
import com.paxata2.backend.web.dto.JobStatusResponse;
import org.quartz.Job;
import org.quartz.JobKey;

public interface ScheduleService {
    JobStatusResponse getAllJobs();

    boolean isJobRunning(JobKey jobKey);

    boolean isJobExists(JobKey jobKey);

    boolean addJob(JobRequest jobRequest, Class<? extends Job> jobClass);

    boolean deleteJob(JobKey jobKey);

    boolean pauseJob(JobKey jobKey);

    boolean resumeJob(JobKey jobKey);

    String getJobState(JobKey jobKey);
}

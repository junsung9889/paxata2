package com.paxata2.backend.web.dto;

import java.util.List;

public class JobStatusResponse {
    private int numOfAllJobs;
    private int numOfGroups;
    private int numOfRunningJobs;
    private List<JobResponse> jobs;
}

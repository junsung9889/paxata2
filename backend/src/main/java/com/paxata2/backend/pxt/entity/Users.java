package com.paxata2.backend.pxt.entity;

import lombok.Data;
import lombok.Getter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Document(collection = "users")
public class Users {
    @Id
    public String id;
    public String username;
    public String usernameLowerCase;
    public String email;
    public String domainId;
    public Boolean isEmailVerified;
    public Long createTime;
    public Boolean isEmailVerifiedNotificationShown;
    public String password;
}

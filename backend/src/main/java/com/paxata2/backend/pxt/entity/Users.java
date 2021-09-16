package com.paxata2.backend.pxt.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "users")
public class Users {
    @Id
    private String _id;

    private String username;
    private String usernameLowerCase;
    private String email;
    private Boolean isEmailVerified;
    private Integer createTime;
    private Boolean isEmailVerifiedNotificationShown;
    private String password;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsernameLowerCase() {
        return usernameLowerCase;
    }

    public void setUsernameLowerCase(String usernameLowerCase) {
        this.usernameLowerCase = usernameLowerCase;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getEmailVerified() {
        return isEmailVerified;
    }

    public void setEmailVerified(Boolean emailVerified) {
        isEmailVerified = emailVerified;
    }

    public Integer getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    public Boolean getEmailVerifiedNotificationShown() {
        return isEmailVerifiedNotificationShown;
    }

    public void setEmailVerifiedNotificationShown(Boolean emailVerifiedNotificationShown) {
        isEmailVerifiedNotificationShown = emailVerifiedNotificationShown;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

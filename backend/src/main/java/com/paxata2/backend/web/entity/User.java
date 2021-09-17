package com.paxata2.backend.web.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "user")
public class User {
    @Id
    private String id ;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String token;

    public User(String username, String name) {
        this.id = id;
        this.username = username;
        this.token = token; }
}

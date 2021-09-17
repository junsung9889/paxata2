package com.paxata2.backend.web.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@Getter
@Entity
@Document(collection = "user")
public class User {
    @Id
    private String ID;
    @Column(nullable = false)
    private String Name;
    @Column(nullable = false)
    private String Token;

    public String getID() {
        return ID;
    }
}

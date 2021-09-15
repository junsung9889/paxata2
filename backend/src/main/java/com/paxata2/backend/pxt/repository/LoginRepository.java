package com.paxata2.backend.pxt.repository;

import com.paxata2.backend.pxt.entity.PaxataUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepository extends MongoRepository<PaxataUser, String> {

}

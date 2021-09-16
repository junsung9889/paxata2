package com.paxata2.backend.pxt.repository;

import com.paxata2.backend.pxt.entity.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {

}

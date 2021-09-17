package com.paxata2.backend.pxt.repository;

import com.paxata2.backend.pxt.entity.Users;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersMongoDBRepository extends MongoRepository<Users, String> {
    List<Users> findUsersByUsername(String username);
}

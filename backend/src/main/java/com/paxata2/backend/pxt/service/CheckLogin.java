package com.paxata2.backend.pxt.service;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CheckLogin {
    private final UsersMongoDBRepository usersMongoDBRepository;

    public List<Users> getUsers(){
        return usersMongoDBRepository.findAll();
    }

    public String checkUser(String username, String password){
        List<Users> usersList = usersMongoDBRepository.findUsersByUsername(username);
        if(usersList.isEmpty()){
            return "Empty";
        }
        else{
            return usersList.get(0).password;
        }

    }
}

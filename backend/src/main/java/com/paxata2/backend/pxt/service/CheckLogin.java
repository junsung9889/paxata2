package com.paxata2.backend.pxt.service;

import com.paxata2.backend.pxt.entity.Users;
import com.paxata2.backend.pxt.repository.UsersMongoDBRepository;
import com.paxata2.backend.pxt.util.HashUtil;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity checkUser(String username, String password){
        List<Users> usersList = usersMongoDBRepository.findUsersByUsername(username);
        System.out.println(usersList);
        if(usersList.isEmpty())
            return new ResponseEntity("ID invalid", HttpStatus.BAD_REQUEST);
        else{
            String pw = usersList.get(0).password;
            String hash =  HashUtil.createHash(password,usersList.get(0).id);
            System.out.println(pw + "\n" + hash);
            if(pw.equals("$PES$:" + hash))
                return new ResponseEntity("Login Success",HttpStatus.ACCEPTED);
            else
                return new ResponseEntity("Password invalid",HttpStatus.CONFLICT);
        }
    }
}

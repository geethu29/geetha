package com.example.demo.controller;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/adduser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/showuser")
    List<User> getAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/getUserById/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @GetMapping("/getUserByEventName/{EventName}")
    User getUserByEventName(@PathVariable String eventName) {
        return userRepository.findUserByUserName(eventName)
                .orElseThrow(() -> new UserNotFoundException(eventName));
    }

    @PutMapping("/updateUser/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id).map(user -> {
            user.setEventName(newUser.getEventName());
            user.setEmailId(newUser.getEmailId());
            user.setName(newUser.getName());


            return userRepository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/deleteUser/{id}")
    String deleteUser (@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "deleted user";
    }
}

package com.example.OfficeHours.controller;

import com.example.OfficeHours.model.OfficeHour;
import com.example.OfficeHours.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {

    @Autowired
    private SessionService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OfficeHour createOfficeHour(@RequestBody OfficeHour officeHour){
        return service.addSession(officeHour);
    }

    @GetMapping
    public List<OfficeHour> getSessions() {
        return service.findAllSessions();
    }

    @GetMapping("/OnlyCourseNames")
    public List<OfficeHour> getCourseNames() { return service.findAllCourseNames();}

    @GetMapping("/{Id}")
    public OfficeHour getSession(@PathVariable String Id){
        return service.SessionById(Id);
    }

    @GetMapping("/courseName/{courseName}")
    public List<OfficeHour> getSessionByCourseName(@PathVariable String courseName){
        return service.SessionByCourseName(courseName);
    }

    @PutMapping
    public OfficeHour modifySession(@RequestBody OfficeHour session){
        return service.updateSession(session);
    }

    @DeleteMapping("/{sessionId}")
    public String deleteSession(@PathVariable String sessionId){
        return service.deleteSession(sessionId);
    }

}

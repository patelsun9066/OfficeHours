package com.example.OfficeHours.service;

import com.example.OfficeHours.model.OfficeHour;
import com.example.OfficeHours.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SessionService {

    @Autowired
    private SessionRepository repository;


    //CRUD - CREATE, READ, UPDATE, DELETE


    // CREATE
    public OfficeHour addSession(OfficeHour session){
        session.setId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(session);
    };


    // READ
    public List<OfficeHour> findAllSessions(){
        return repository.findAll();
    }

    public List<OfficeHour> findAllCourseNames(){
        return repository.findAllCourseNames();
    }

    public OfficeHour SessionById(String Id){
        return repository.findById(Id).get();
    }

    public List<OfficeHour> SessionByCourseName(String courseName){
        return repository.findByCourseName(courseName);
    }

    // UPDATE
    public OfficeHour updateSession(OfficeHour session){
        // get existing document from DB
        OfficeHour existingSession = repository.findById(session.getId()).get();
        // populate new value from request to existing object/entity/document
        existingSession.setCourseName(session.getCourseName());
        existingSession.setSection(session.getSection());
        existingSession.setProfessorName(session.getProfessorName());
        existingSession.setTerm(session.getTerm());
        existingSession.setDate(session.getDate());
        existingSession.setOfficeHours(session.getOfficeHours());
        existingSession.setMeetingLink(session.getMeetingLink());
        existingSession.setHostName(session.getHostName());
        // Save the updated existing document into DB
        return repository.save(existingSession);

    }

    // DELETE
    public String deleteSession(String sessionId){
        repository.deleteById(sessionId);
        return "session deleted from Database";
    }





}

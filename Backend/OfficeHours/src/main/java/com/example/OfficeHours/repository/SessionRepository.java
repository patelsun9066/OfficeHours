package com.example.OfficeHours.repository;

import com.example.OfficeHours.model.OfficeHour;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SessionRepository extends MongoRepository<OfficeHour, String> {

    @Query("{courseName: ?0 }")
    List<OfficeHour> findByCourseName(String courseName);

    @Query(value = "{}", fields = "{ 'courseName' : 1 }")
    List<OfficeHour> findAllCourseNames();

}


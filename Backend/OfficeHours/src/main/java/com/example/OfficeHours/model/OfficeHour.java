package com.example.OfficeHours.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Document(collection = "office-hours")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OfficeHour {

    @Id
    private String id;

    private String courseName;
    private int section;
    private String professorName;
    private String term;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate date;
    private String officeHours;
    private String meetingLink;
    private String hostName;

}

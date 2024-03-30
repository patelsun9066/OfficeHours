import axios from "axios";
import Dropdown from '../components/Dropdown';
import './Dropdown.css';
import OfficeHourList from '../components/OfficeHourList';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LiveHoursPage() {

    const [courses, setCourse] = useState<string[]>([]);

    const [selectedCourse, setSelectedCourse] = useState('')

    const [displayCourses, setDisplayCourses] = useState([])

    const [newCourseDisplay, setNewCourseDisplay] = useState(false)

    const handleDropdownChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCourse(event.target.value);
    };

    const navigate = useNavigate();

    const proxyUrl = 'https://cors-anywhere-ew5o.onrender.com/'

    // Get Course Names for the DropDown Componenent - Stored in Courses.
    async function callGetAllCourse() {
        const options = {
            method : "GET",
            url : `${proxyUrl}http://18.207.227.51:8080/api/sessions/OnlyCourseNames`
        };
        try {
            const response = await axios.request(options);
            return response;
        } catch (error) {
            console.log(error)
        }
    };

    // Get Office hours for a particular Course - stored in 
    async function GetAllOfficeHours() {
        const options = {
            method : "GET",
            url : `${proxyUrl}http://18.207.227.51:8080/api/sessions/courseName/${selectedCourse}`
        };
        try {
            const response = await axios.request(options);
            return response;
        } catch (error) {
            console.log(error)
        }
    };

    // function to get course names for DropDown Component - results stored in Courses
    async function getCourseNames() {
        let Names:string[] = [];
        try {
            const data:any = await callGetAllCourse();
            const apiCourseNames = data.data
            console.log(apiCourseNames)

            for (let i = 0; i < apiCourseNames.length; i++){
                let course_name = apiCourseNames[i]["courseName"];
                if (Names.includes(course_name) === false) {
                    Names.push(course_name);
                } else {
                    continue;
                }
            }
        } catch (error) {
            console.log(error);
        }
        setCourse(Names);
    };


    // function to get office hours of selected course - stored in DisplayCourses
    async function getSelectedCourse() {
        let response = [];
        try {
            const data:any = await GetAllOfficeHours();
            response = data.data;
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        setDisplayCourses(response);

    }


    function checkDisplay() {
        getSelectedCourse();
        setNewCourseDisplay((newCourseDisplay) => newCourseDisplay = !newCourseDisplay)
    };

    async function AddOfficeHour() {
        navigate("/AddOfficeHourPage", {});
    }

    useEffect(() => {
        getCourseNames()
        }, [newCourseDisplay]);
    
    return (
        <>
        <h1>LIVE OFFICE HOURS</h1>
        <Dropdown courses={courses} onChange={handleDropdownChange} />
        <button onClick={() => checkDisplay()}>SEE HOURS!</button>
        <p className="officehour">Office Hours For: {selectedCourse}</p>
        <button onClick={() => AddOfficeHour()}>ADD HOURS!</button>
        <OfficeHourList displayCourses={displayCourses} checkDisplay={checkDisplay} />
        </>
    )
}

export default LiveHoursPage;
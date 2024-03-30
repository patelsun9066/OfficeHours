import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.css';

function AddNewCoursePage() {

    const [courseName, setCourseName] = useState('blank');
    const [section, setSection] = useState('blank');
    const [professorName, setProfessorName] = useState('blank');
    const [term, setTerm] = useState('blank');
    const [date, setDate] = useState('blank');
    const [officeHours, setOfficeHours] = useState('blank');
    const [meetingLink, setMeetingLink] = useState('blank');
    const [hostName, setHostName] = useState('blank');

    const navigate = useNavigate();

    const proxyUrl = 'https://cors-anywhere-ew5o.onrender.com/'

    const addNewCourse = async () => {
        const newCourse = {
            courseName : courseName, 
            section : section,
            professorName : professorName,
            term : term, 
            date : date,
            officeHours : officeHours,
            meetingLink : meetingLink,
            hostName : hostName        
        };
        const json = JSON.stringify(newCourse);
        try {
            const res = await axios.post(`${proxyUrl}http://18.207.227.51:8080/api/sessions`, json, { headers : { 'Content-Type' : 'application/json'}});
            console.log(res);
        } catch (error) {
            console.log(error)
        };
        navigate("/", {});
    };
    return (
        <>
        <div>
            <h1>ADD NEW OSU COURSE!</h1> 
        </div>
        <div>
            <form onSubmit={(e) => { e.preventDefault();}}>
            <fieldset>
                <br></br>
                <label className='inputlabel'>Course Name : </label>
                <input 
                    type="text"
                    value={courseName}
                    onChange={e => setCourseName(e.target.value)} 
                    id="courseName"/> 
                <br></br>
                <label className='inputlabel'>Section : </label>
                <input 
                    type="number"
                    value={section}
                    onChange={e => setSection(e.target.value)} 
                    id="section"
                    min="1"/> 
                <br></br>
                <label className='inputlabel'>Professor Name : </label>
                <input 
                    type="text"
                    value={professorName}
                    onChange={e => setProfessorName(e.target.value)} 
                    id="professorName"/> 
                <br></br>
                <label className='inputlabel'>Term : </label>
                <select name="term" id="term" value={term} onChange={e => setTerm(e.target.value)}>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
                <br></br>
                <label className='inputlabel'>Date : </label>
                <input 
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)} 
                    id="date"
                    min="1000-01-01" // Set minimum allowed date
                    max="9999-12-31" // Set maximum allowed date
                    required // Make the field required
                    pattern="\d{4}-\d{2}-\d{2}" // Enforce format yyyy-MM-dd
                    /> 
                <br></br>
                <label className='inputlabel'>Office Hours : </label>
                <input 
                    type="time"
                    value={officeHours}
                    onChange={e => setOfficeHours(e.target.value)} 
                    id="officeHours"/> 
                <br></br>
                <label className='inputlabel'>Meeting Link : </label>
                <input 
                    type="text"
                    value={meetingLink}
                    onChange={e => setMeetingLink(e.target.value)} 
                    id="meetingLink"/> 
                <br></br>
                <label className='inputlabel'>Host Name : </label>
                <input 
                    type="text"
                    value={hostName}
                    onChange={e => setHostName(e.target.value)} 
                    id="hostName"/> 
                <br></br>
                <br></br>
                <label>
                    <button type="submit" onClick={addNewCourse} id="submit">
                        Add Course
                    </button>
                </label> 
            </fieldset>
            </form>
        </div>
        </>
    );
}

export default AddNewCoursePage;
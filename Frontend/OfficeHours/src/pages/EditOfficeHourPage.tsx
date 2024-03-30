import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dropdown.css';

function EditOfficeHourPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const proxyUrl = 'https://cors-anywhere-ew5o.onrender.com/'

    const [id] = useState(location.state.officehour.id)
    const [courseName, setCourseName] = useState(location.state.officehour.courseName);
    const [section, setSection] = useState(location.state.officehour.section);
    const [professorName, setProfessorName] = useState(location.state.officehour.professorName);
    const [term, setTerm] = useState(location.state.officehour.term);
    const [date, setDate] = useState(location.state.officehour.date);
    const [officeHours, setOfficeHours] = useState(location.state.officehour.officeHours);
    const [meetingLink, setMeetingLink] = useState(location.state.officehour.meetingLink);
    const [hostName, setHostName] = useState(location.state.officehour.hostName);
    
    const editOfficeHour = async () => {
        const editedHour = {
            id : id,
            courseName : courseName, 
            section : section,
            professorName : professorName,
            term : term, 
            date : date,
            officeHours : officeHours,
            meetingLink : meetingLink,
            hostName : hostName        
        };
        const json = JSON.stringify(editedHour);
        try {
            const res = await axios.put(`${proxyUrl}http://18.207.227.51:8080/api/sessions`, json, { headers : { 'Content-Type' : 'application/json'}});
            console.log(res);
        } catch (error) {
            console.log(error)
        };
        navigate("/LiveHoursPage", {});
    };
    return (
        <>
        <div>
            <h1>EDIT COURSE OFFICE HOUR!</h1> 
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
                    <button type="submit" onClick={editOfficeHour} id="submit">
                        Edit Hour
                    </button>
                </label> 
            </fieldset>
            </form>
        </div>
        </>
    );
}

export default EditOfficeHourPage;
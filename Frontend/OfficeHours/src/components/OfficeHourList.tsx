import OfficeHour from './OfficeHour';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../App.css'

function OfficeHourList({ displayCourses, checkDisplay } : any) {


    const navigate = useNavigate();

    const proxyUrl = 'https://cors-anywhere-ew5o.onrender.com/'

    // Delete a Office Hour with its _id from MongoDB
    async function deleteOfficeHour(sessionId : string) {
        const options = {
            method: "DELETE",
            url : `${proxyUrl}http://18.207.227.51:8080/api/sessions/${sessionId}`
        };
        try {
            const response = await axios.request(options);
            console.log(response)
            checkDisplay()

        } catch (error) {
            console.log(error)
        }
        checkDisplay();
    };


    async function editOfficeHour(officeHour : any) {
        navigate("/EditOfficeHourPage", {state : {officehour : officeHour}});
    }

    /*async function AddOfficeHour() {
        navigate("/AddOfficeHourPage", {});
    }*/

    return (
        <div className=''>
        <table className="table">
            <caption className="caption">UPCOMING HOURS</caption>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Section</th>
                    <th>Professor Name</th>
                    <th>Term</th>
                    <th>Date</th>
                    <th>Office Hours</th>
                    <th>Meeting Link</th>
                    <th>Host Name</th>
                </tr>
            </thead>
            <tbody>
                {displayCourses.map((displayCourse : any, i : any) => 
                    <OfficeHour
                        displayCourse={displayCourse} 
                        key={i}
                        onDelete={deleteOfficeHour}
                        onEdit={editOfficeHour}
                    />)}
            </tbody>
        </table>
        </div>
    );
}

export default OfficeHourList;

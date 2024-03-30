import { MdDeleteForever, MdEdit } from 'react-icons/md';

function OfficeHour({ displayCourse, onDelete, onEdit} : any) {
    return (
        <tr>
            <td>{displayCourse.courseName}</td>
            <td>{displayCourse.section}</td>
            <td>{displayCourse.professorName}</td>
            <td>{displayCourse.term}</td>
            <td>{displayCourse.date}</td>
            <td>{displayCourse.officeHours}</td>
            <td>{displayCourse.meetingLink}</td>
            <td>{displayCourse.hostName}</td>
            <td><MdDeleteForever onClick={() => onDelete(displayCourse.id)} /></td>
            <td><MdEdit onClick={() => onEdit(displayCourse)} /></td>
        </tr>
    );
}

export default OfficeHour;
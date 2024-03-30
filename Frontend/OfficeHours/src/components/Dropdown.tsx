interface DropdownProps {
    courses: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
function Dropdown( { courses, onChange}: DropdownProps) {

    return (

        <select onChange={onChange} style={{ width: '200px', color: 'black' }}>
            {courses.map((course) => (
                <option key={course} value={course}>{course}</option>
            ))}
        </select>
    );
}

export default Dropdown;
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
          <Link to="../" ><button>Home Page</button></Link>
          <Link to="../AddNewCoursePage" ><button> Add A New OSU Course</button></Link>
          <Link to="../LiveHoursPage"><button>Live Hours!</button></Link>
      </nav>
    );
  }
  
export default Navigation;
  

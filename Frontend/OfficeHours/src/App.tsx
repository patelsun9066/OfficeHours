
import './App.css'
import osu from './osu.jpg';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';

import AddNewCoursePage from './pages/AddNewCoursePage';
import LiveHoursPage from './pages/LiveHoursPage'
import EditOfficeHourPage from './pages/EditOfficeHourPage';
import AddOfficeHourPage from './pages/AddOfficeHourPage';


function App() {

  return (
    <>
      <div>
        <img src={osu} className="logo" alt="Vite logo" />
      </div>
      <h1>Office Hours!</h1>
      <div className="card">
        <Router> 
        <Navigation />

        <Routes>
          <Route path='/AddNewCoursePage' element={<AddNewCoursePage />} />
          <Route path='/LiveHoursPage' element={<LiveHoursPage />} />
          <Route path='/EditOfficeHourPage' element={<EditOfficeHourPage />} />
          <Route path='/AddOfficeHourPage' element={<AddOfficeHourPage />} />
        </Routes>
      </Router>
      </div>
      <div>
        <p>
          A One Stop Shop To Check All Live Office Hour At OSU.
        </p>
        <p>
          Created For Students. Maintained By Professors and TAs. Benefit For All. 
        </p>
        <p className="read-the-docs">
          Click on the "Live Hours" to explore hours!
        </p>
      </div>
    </>
  )
}

export default App

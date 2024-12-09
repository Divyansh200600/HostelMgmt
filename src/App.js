import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import required components
import UserDashboard from './pages/user/userDb';
import UserPage from "./pages/user/userPage";
import AdminDashboard from './pages/admin/adminDashboard';
import AddStudent from './components/adminComps/addStudent';
import ManageRoom from './components/adminComps/manageRoom';
import Fees from './components/adminComps/fees';
import FeesManagement from './components/adminComps/fees';
import AdminLogin from './pages/admin/adminLogin';
function App() {
  return (
    <Router> {/* Wrap your app in BrowserRouter */}
      <div className="App">
        {/* Set up routes using Routes */}
        <Routes>
          <Route path="/" element={<AdminLogin/>} /> {/* Route for UserPage at root */}
          <Route path="/dashboard" element={<UserDashboard />} /> {/* Route for UserDashboard */}
          <Route path= "/admin-dashboard" element={<AdminDashboard/>} /> 
          <Route path= "/add-student" element={<AddStudent/>} /> 

          <Route path= "/manage-room" element={<ManageRoom/>} /> 
          <Route path="/fees" element= {<FeesManagement/>}/>
          
   

        </Routes>
      </div>
    </Router>
  );
}

export default App;

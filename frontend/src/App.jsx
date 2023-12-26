import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/User Dashboard/Dashboard";
import AdminDashboard from "./pages/Admin Dashboard/AdminDashboard";

function App() {
  return (
  <>
  {/* <Navbar/> */}
  {/* <Home/> */}
  {/* <Login/> */}
  {/* <Signup/> */}
  <Dashboard/>
  {/* <About/> */}
  {/* <AdminDashboard/> */}

    <Router>
      <Routes>
        <Route exact path= '/' element={ <><Navbar/> <Home/> </> }/>
        <Route exact path= '/about' element={ <>  <Navbar/> <About/></> }/>
        <Route exact path= '/signup' element={ <>  <Navbar/> <Signup/></> }/>
        <Route exact path= '/login' element={ <>  <Navbar/> <Login/></> }/>
      </Routes>
    </Router>




  </>
  )
}

export default App;

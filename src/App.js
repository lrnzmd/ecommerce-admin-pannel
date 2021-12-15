import React from 'react'
import './app.css'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from './pages/userList/UserList';


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/users" element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

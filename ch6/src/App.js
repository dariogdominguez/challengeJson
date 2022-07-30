import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";

import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import AllPost from './components/AllPost';
import NotFound from './components/NotFound';
import React from 'react';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
          <Route exact path="/CreatePost" element={<CreatePost/>}></Route>
          <Route exact path="/AllPost" element={<AllPost/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;

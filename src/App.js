
import './App.css';
import Navbar from './components/navbar/navbar'
import  { Routes, Route } from "react-router-dom";
import Home from './components/homepage/homepage'
import Course from './components/course/course'
import Login from './components/login/login'
import Register from './components/register/register'
import React from "react";

import Footer from "./footer";
    function App() {
      return (
        <div>
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                    <Route path="/" element={ <Home/>} /> 
                        <Route path="/homepage" element={ <Home/>} /> 
                        <Route path="/course" element={ <Course/> }/>
                        <Route path="/login" element={ < Login/> }/>
                        <Route path="/register" element={ <Register/> }/>
                    </Routes>
                </div>
                <Footer />
        </div>    
    )
    }   
export default App;



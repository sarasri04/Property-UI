import React from "react";
import './App.css';
import Navbar from './components/navbar/navbar'
import  { Routes, Route } from "react-router-dom";
import Home from './components/homepage/homepage'
import Todolist from './components/todolist/todolist'
import Login from './components/login/login'
import Footer from "./footer";

    function App() {
      return (
        <div>
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                       
                        <Route path="/" element={ <Home/>} /> 
                        <Route path="/homepage" element={ <Home/>} /> 
                        <Route path="/todolist" element={ <Todolist/> }/>
                        <Route path="/login" element={ < Login/> }/>
                        
                    </Routes>
                    
                </div>
                <Footer />
        </div>    
    )
    }   
export default App;



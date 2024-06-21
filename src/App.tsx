import React from 'react';
import {BrowserRouter, Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<SideBar/>}/>   
         </Routes>
       </BrowserRouter>
       
       
   
  );
}

export default App;

import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from "./pages/Dashboard";
import Usermanagement from "./pages/Usermanagement";
import ClassSchedule from "./pages/ClassSchedule";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management" element={<Usermanagement />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
      </Routes>
    </div>
  )
}

export default App

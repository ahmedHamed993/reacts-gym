import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Box } from '@material-ui/core';
// import components 
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import css files 
import './app.css';

const App = () => {
  return (
    <Box with="400px" sx={{ width: {xl: '1448px' }}} m="auto">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App
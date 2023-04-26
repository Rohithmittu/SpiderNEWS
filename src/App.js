

import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import {  HashRouter, Routes, Route  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [Progress, setProgress] = useState(0)

 
 
    return (
      <>
        
        <HashRouter>

        
        
      <div>
          

        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        Progress={Progress}
        />
        
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} keyentertainment pageSize={pageSize} country="us" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
        
        </Routes>
      
      </div>
   

      </HashRouter>
      
     
      </>
    )
  
}
export default App;
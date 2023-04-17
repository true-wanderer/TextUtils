import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const[alert,setAlert]=useState(null);
  const[mode,setmode]=useState('light');
  const showAlert=(message,type)=>{ 
    setAlert({  
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1580);
  }

  
  const togglemode= ()=>{
    if(mode==='light'){
    setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtil-Dark Mode"}
    else {setmode('light')
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enabled","success");
        document.title="TextUtil-Light Mode"}
  }

  return (
    <>
   
<Navbar title="TextUtil" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<Textform/>

</>
    

  );
}

export default App;

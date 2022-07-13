import './App.css';
import { Routes, Route } from 'react-router-dom';
import WebFont from "webfontloader";
import React from 'react';
import Home from "./component/Home/Home.js";
import Abiout from './component/About/abiout';
import Form from './component/signup/Form';
import Loginpg from '../src/component/Login/Login';
import Loginpg1 from '../src/component/Login1/Login1'
import Profile from './component/Portfoliocontainer/Homi/Profile';
import Form1 from './component/form1/form1';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/bootstrap.min.css"
import ViewLeave from './component/viewLeave/viewLeave';
import Mailer from './component/contact/mailer'; 


function App() {
  React.useEffect(() => 
    {
      WebFont.load({
        google:{
            families: ["Roboto", "Droid Sans", "Chilanka"],
        }
      })
    }, []);

  return (
 
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Abiout />} path="about" />
        <Route element={<Form/>} path="Form"/>
        <Route element={<Profile/>} path="profile"/>
        <Route element={<Loginpg/>} path="Login"/>
        <Route element={<Loginpg1/>} path="Login1"/>
        <Route element ={<Form1/>} path="form1"/>
        <Route element ={<ViewLeave/>} path="viewLeave"/>
        <Route element ={<Mailer/>} path="mailer"/>
              </Routes>   
  );
}

export default App;

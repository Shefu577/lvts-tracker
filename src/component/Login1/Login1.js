import React from 'react'
import './Login1.css'
import Loginpic from '../../resources/a.png';
import ID from '../../resources/ID.png';
import Password from '../../resources/pass.png';
import {useNavigate} from "react-router-dom";
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';

export default function Login1() {

    let history = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        if(username === "admin" && password ==="admin123")
        {
            alert("Login Successfull!!");
            history("/viewLeave")
        }

    }
  return (
         <div>
           <Header/>  
         <form onSubmit={handleSubmit}>
        <div className='main'>
            <div className='sub-main'>
                <div>
                    <div className='imgs'>
                        <div className='container-image'>
                            <img src={Loginpic} alt="profile-pic" className='profile'/>
                        </div>
                    </div>

                    <div>
                        <h1> ADMIN LOGIN</h1>
                        <br/>
                        <div>
                            <img src={ID} alt="ID" className='ID'/>
                            <input type="text" placeholder="Username" className="name" id="username" name ="username"/>    
                        </div>
                        <div className='second'>
                            <img src={Password} alt="PASS" className='PASS'/>
                            <input type="Password" placeholder="Password" className="name" id ="password" name="password"/>    
                        </div>
                        <div className='login-button'>
                            <button > LOGIN </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
        <Footer/>
        </div>
    
  )
}

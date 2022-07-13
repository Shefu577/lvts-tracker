import React, {useState} from 'react'
import './Login.css'
import Loginpic from '../../resources/a.png';
import ID from '../../resources/ID.png';
import Password from '../../resources/pass.png';
import {useNavigate} from 'react-router-dom';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer'

const Login = () =>{

    const [credentials, setCredentials] = useState({username: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: credentials.username, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.auth);
            alert("Login Successful !!"); 
            history("/form1");
            

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
        
        <div>
         <Header/>
        <div className='main'>
           
            
            <div className='sub-main'>
                <div>
                    <div className='imgs'>
                        <div className='container-image'>
                            <img src={Loginpic} alt="profile-pic" className='profile'/>
                        </div>
                    </div>

                    <div>
                        <h1> MANAGER LOGIN </h1>
                        <br></br>
                        <form  onSubmit={handleSubmit}>
                        <div>
                            <img src={ID} alt="ID" className='ID'/>
                            <input type="text" placeholder="Username" onChange={onChange} className="name" id="username" name="username" />    
                        </div>
                        <div className='second'>
                            <img src={Password} alt="PASS" className='PASS'/>
                            <input type="Password" placeholder="Password" onChange={onChange} className="name" id="password" name="password"/>    
                        </div>

                        <div className='login-button'>
                            <button> LOGIN </button>
                        </div>
                        </form>
                            <p className='link'>
                                Forgot Password ? then <a href='Form'>Sign-up</a>
                            </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default Login

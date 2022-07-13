import React, {useState} from 'react';
import './Form.css';
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { json } from 'express';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';

const Form = () => {

  const [credentials, setCredentials] = useState({username: "", email: "", password: "",address: "", contact_no: "", password2: ""}) 
    let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {username, email, password, address, contact_no} = credentials;
    console.log(credentials)
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username,email: email,password: password,address: address,contact_no: contact_no})
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('auth', json.authtoken); 
        alert("Manager is registered. Now Login!!");
        history("/Login");

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
      <div className='form-container'>
        <span className='close-btn'><Link to = "/">x</Link></span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>

      <div className='form-content-right'>
      
        
        <form className='form' onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Username</label>   
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your name'
            id='username' onChange={onChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            id='email' onChange={onChange}  
          />
          </div>

        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            id='password' onChange={onChange} minlength = {5} required
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Address</label>   
          <input
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your Address'
            id='address' onChange={onChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Contact No</label>   
          <input
            className='form-input'
            type='text'
            name='contact_no'
            placeholder='Enter your contact'
            id='contact_no' onChange={onChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            id='password2' onChange={onChange} minlength = {5} required
          />
        </div>

        <button className='form-input-btn' type='submit'>Sign up</button>
        
        <span className='form-input-login'> Already have an account? Login <a href='Login'>here</a></span>

        
      </form>
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default Form;

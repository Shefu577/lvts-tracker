import React, { Fragment } from 'react'
import './Card.css';
import Piclogin from '../../resources/a.png'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <Fragment>
    <div className='Card'>
        
        <div className='upper-container'>
            <div className='image-container'>
               <img src={Piclogin} alt='' height='100px' width='100px' />
                </div>   
        </div>

        <div className='lower-container'>
            <h3> ADMIN </h3>
            <p> Hi.. Here Admin login and get directed to Admin Dashboard Page  </p>
            <p></p>
            <button class="button button5"><Link to = "Login1">LOGIN</Link></button>
        </div>
    </div>
        
    <div className='Card2'>
        
        <div className='upper-container'>
            <div className='image-container'>
               <img src={Piclogin} alt='' height='100px' width='100px' />
                </div>   
        </div>

        <div className='lower-container'>
            <h3> MANAGER</h3>
            <p> Hi.. Here Manager can login or signup into the profiler section</p>
            <p></p>    
            <button class="button button3" > <Link to = "Form">SIGNUP</Link></button>
            <p></p>
            <button class="button button4"> <Link to = "Login">LOGIN</Link></button>
            
            
            
            
            
            
        </div>
    </div>
    
    
    </Fragment>
    
  )
}

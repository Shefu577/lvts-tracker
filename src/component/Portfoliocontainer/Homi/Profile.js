import React, { Fragment } from 'react';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import '../../../index.css'
import '../Homi/profile.css'
import Footer2 from '../../../resources/shape-bg.png'
export default function profile() {
  return( 
    <Fragment>  
        <Header />
     <div className='profile-container'>
         <div className='profile-parent'>
             <div className='profile-details'>
                            <div className='colz'>
                                    <div className='colz-icon'>
                                            <h1>LVTS-Tracker</h1>
                                            {/* <LinkedInIcon/> */}
                                    </div>
                            </div>

                            <div className='profile-details-name'>
                                    <span className='primary-text'>
                                        {" "}
                                        Hi, Welcome <span className='highlighted-text'>SAMEER KUMRA</span>
                                        <br/>
                                        Here you can check your working hours and leaves..
                                        {/* Here i want a variable value to be printed which takes the data from database ..*/}
                                    </span>
                            </div> {/* closing div of primary text div*/}

                            <div className='profile-options'>
                                        <button className='btn primary-btn'>
                                            {""}
                                            CHECK WORK TIME {" "}
                                        </button>
                                        <button className='btn highlighted-btn'>
                                            LEAVE-MGMNT
                                        </button>
                            </div>
                        
                        </div> {/* closing div of profile-details div*/}
                        
                        <div className='profile-picture'>
                            <div className='profile-picture-background'>

                            </div>
                        </div>    
                        <br/>            
                         
            </div> {/* closing div of profile -parent div and last div is of profile-container*/}
            <div className='profile-footer'>
                            <div className='profile-footer-background'>
                                <img src={Footer2} />
                            </div>
                        </div>  
           
        </div>   
        hello world
    <Footer />
    </Fragment>
  )
 
}

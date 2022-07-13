import React from 'react'
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import image from '../../resources/img.jpg'


const Abiout = () => {
    return (
        <div>
            <Header />
            <div class="section">
                <div class ="container">
                    <div class="title">
                        <br/>
                        <h1 align="center">About Us</h1>
                        <br/>
                    </div>
                    <div class ="content">
                        <div class ="article">
                            <p>
                            It will be a web based application.
                            The aim of the project is to track the employee leave record to build a dynamic organization.
                            The tracking will help the organization to statistically see the leaves record of managers which will be modified by admin 
                            We are using MongoDB Atlas for cloud storage backup and MongoDB Compass fetching details.   
                            </p>
                            <div class="button">
                                <a href = "">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class ="image-selection" align="center">
                    <img src={image} />
                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default Abiout

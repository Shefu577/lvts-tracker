import React, { Fragment } from "react";
import Footer from "../layout/Footer/Footer";
import Card from "./Card";
import Header from '../layout/Header/Header';

import "./Home.css";
const Home = () => 
{
    return (
        <Fragment>
            <Header />
            <div className="banner">
                {/* <h1>Welcome to LvTs-tracker</h1> */}
            </div>
            <div className="app">
                <Card/>
            </div>
            <Footer />
            
        </Fragment>

        );
    
}

export default Home

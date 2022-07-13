import React from 'react'
import playstore from "../../../resources/playstore.png";
import Appstore from "../../../resources/Appstore.png";
import "./Footer.css";
const Footer = () => {
    return (
       <footer id = "footer">
           <div className= "leftfooter">
               <h4>DOWNLOAD OUR APP</h4>
               <p>Download App for Androide and IOS mobile phone</p>
               <img src={playstore} alt="playstore"/>
               <img src={Appstore} alt="Appstore"/>
           </div>

           <div className ="midfooter">
               <h1>LvTs-Tracker</h1>
               <p>We manage your leaves </p>
           </div>

           <div className="rightfooter">
               <h4>Developed By:</h4>
               <a href='https://www.instagram.com/sameer_kumra/'>SAMEER_KUMRA</a>
               <a href='https://www.instagram.com/_simran.26_/'>SIMRAN_JIT_KAUR</a>
               <a href='https://www.instagram.com/shefalisinhaspl/'>SHEFALI SINHA</a>               
               <a href='https://www.instagram.com/kambojriya31/'>RIYA KAMBOJ</a>
           </div>

       </footer>
    );
}

export default Footer

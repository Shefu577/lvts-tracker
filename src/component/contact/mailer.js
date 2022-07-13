import emailjs from 'emailjs-com';
import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer'

const Mailer = () =>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_cci8zi1' , 'template_m8ogbmc', e.target, '1gf7VoF2jslrTZfrH').then(
            res=>{
                console.log(res);
                alert("Message send Successfully !!")
                
            }
        ).catch(err => console.log(err));
        
    }
    
    return (
        
    <div>
           <Header/>
        <div className='container border'
        style={{marginTop: "50px",
        width:'50%',
        backgroundImage: `url('https://media.istockphoto.com/photos/wood-block-symbol-telephone-mail-address-and-mobile-phone-website-picture-id870307396?b=1&k=20&m=870307396&s=170667a&w=0&h=eDMRlNm6Nn66HWUEA_cnLUVy_j680Xu2AtgQoiL3Pas=')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    }}
        >
            
            <h1 style={{marginTop: '25px'}}>
                CONTACT FORM
            </h1>
            <form className="row" style={{margin:"100px 500px 90px 50px"}}
            onSubmit={sendEmail}>
                <label>
                    NAME
                </label>
                <input type='text' name='name' className="flow-control"/>
                <label>
                    EMAIL
                </label>
                <input type='text' name='user-email'className="flow-control"/>

                <label>
                    MESSAGE
                </label>
                <textarea name='message' row='7'className="flow-control"/>
                <input type='submit' value='send' className='form-control btn btn-primary' style={{marginTop: '30px'}}/>
            </form>
        </div>
        <Footer/>
    </div>

     );

}
export default Mailer;
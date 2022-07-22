import React, {useState} from 'react'
import Header from '../layout/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import Footer from '../layout/Footer/Footer';
const Form1 = () => {

  const [credentials, setCredentials] = useState({name: "", email: "", address: "", contact: "", typeleave: "", startdate:"", enddate:"", days:""}) 
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, address, contact, typeleave, startdate, enddate, days} = credentials;
    console.log(credentials)
    const response = await fetch("http://localhost:5000/leaveapi/leaveapi", {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        
        body: JSON.stringify({name: name, email: email, address: address, contact: contact, typeleave: typeleave, startdate: startdate, enddate: enddate, days: days})
    });
    
    const json = await response.json();
    
    if (json.success){
        // redirect
        alert("Leave Applied. You will be updated by your registered email either your mail is accepted or rejected")
    }
    else{
        alert("Invalid credentials");
    }
}

const onChange = (e)=>{
    if(e.target.name === 'startdate') {
      const currDate = new Date();
      const x = new Date(e.target.value)
      if(currDate > x) {
        alert('Start date for the leave cannot be the date before today.')
        return;
      }
    } else if (e.target.name === 'enddate') {
      const currDate = new Date();
      const x = new Date(e.target.value)
      if(currDate > x) {
        alert('End date for the leave cannot be the date before today.')
        return;
      }

      const y = new Date(credentials.startdate)
      if(y > x) {
        alert('Start date should not be after the end date.')
        return;
      }
      
    }
    setCredentials({...credentials, [e.target.name]: e.target.value})    
} 

const handlelogout = () =>{
  history("/login");
}

    return (
            
    <div> 
            <Header/>
        
          <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>LEAVE APPLICATION FORM</h4>
      <Form onSubmit={handleSubmit}>
      <Form.Group>

          <Form.Label>ENTER YOUR FULL NAME:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" name="name" controlId ="name" onChange={onChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>ENTER YOUR EMAIL:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" name="email" controlId ="email" onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>ENTER YOUR ADDRESS:</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" name="address" controlId ="address" onChange={onChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>ENTER YOUR CONTACT</Form.Label>
          <Form.Control type="tel" placeholder="Enter your contact" name="contact" controlId ="contact" onChange={onChange}/>
        </Form.Group>
        <Form.Label>TYPE OF LEAVE</Form.Label>
        <Form.Select aria-label="Default select example" name="typeleave" controlId="typeleave" onChange={onChange} >
              <option>Select Type of Leave</option>
              <option value="Casual Leave">CASUAL LEAVE</option>
              <option value="Paid Leave">PAID LEAVE</option>
              <option value="Maternity Leave">MATERNITY LEAVE</option>
              <option value="Paternity Leave">PATERNITY LEAVE</option>
            </Form.Select>
        <Form.Group controlId="dob">
                            <Form.Label>START DATE</Form.Label>
                            <Form.Control type="date" name="startdate" controlId="startdate" placeholder="Start Date" onChange={onChange}/>
                        </Form.Group>
                        <Form.Group controlId="dob">
                            <Form.Label>END DATE</Form.Label>
                            <Form.Control type="date" name="enddate" controlId="enddate" placeholder="End Date" onChange={onChange} />
                        </Form.Group>
        
        <br/>  
       
        <Button class='col-xs-3' variant="primary" type="submit">
           Send Request
        </Button>
        
        <Button class='col-xs-3' variant="danger" type="logout" onClick={handlelogout}>
           Logout
        </Button>
        
      </Form>
    </div>
    <Footer/>
    </div>
    
                      
        
    )
}

export default Form1
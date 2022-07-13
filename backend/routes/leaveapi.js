const express = require('express');
const Leave = require('../models/leave');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const  nodemailer = require('nodemailer');

function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24; // milliseconds per year
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return (Math.floor((utc2 - utc1) / _MS_PER_DAY)) / 1000;
  }

//leave create by manager
router.post('/leaveapi', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('address', 'enter valid address').isLength({ min: 5 }),
    body('contact', 'contact_no should be of length 10').isLength({ max: 10 }),
], async (req, res) => {

    let success = false;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const contact = req.body.contact;
    const typeleave = req.body.typeleave;
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;
    // const startdate = new Date(Date.parse(req.body.startdate) * 1000);
    // const enddate = new Date(Date.parse(req.body.enddate) * 1000);
    const status = "pending"
    const days = dateDiffInDays(new Date(Date.parse(startdate) * 1000), new Date(Date.parse(enddate) * 1000));
    // UTC time format, epoch time
    try {
        
        const leave = await Leave.create({
            name, email, address, contact, typeleave, startdate, enddate, status, days
        })
        success = true;
        res.status(200).send({ 'success': success })
        
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }




})

//fetching leaves
router.get('/getleaves', async (req, res) => {

    let success = false;

    try {
        let leave = await Leave.find();
    if(!leave){   
        success = false  
        return res.status(400).json({success, error: "no leave found"})
    }
    else{
        success = true
        return res.status(200).json({success, message: leave})
    }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

const transporter = nodemailer.createTransport({
    service : 'gmail',
    tls :{
      rejectUnauthorized: false
    },
    auth: {
      user: 'lvts127@gmail.com',
      pass: 'lvtsmca@22'
    }
  })

//for updating status
router.put('/statusupdate', async (req, res) => {
    
    let success = false;
    
    const id = mongoose.Types.ObjectId(req.body.id);
    const status = req.body.status;
    const email = req.body.email;

    try {
        
        const data = await Leave.findOneAndUpdate({ _id: id},{status: status})
        success = true;
        //email send

        transporter.sendMail({
            from:"lvts127@gmail.com",
            to: email,
            subject: "Test mail",
            text: status === 'accept' ? "Your leave is accepted." : "Your leave is rejected.",
          
          }, (error,response) => {
            if(error)
               console.log('Error',error);
            else
              
              console.log('Mail Sent', response) 
              abort("Mail Sent")             
          })
        return res.status(200).json({success})
        
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})

module.exports = router

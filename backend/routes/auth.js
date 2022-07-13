const express = require('express');
const User = require('../models/user');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'secret';

//Route1: create a user
router.post('/createuser',[
    body('username','Enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
    body('address','enter valid address').isLength({min:5}),
    body('contact_no','contact_no should be of length 10').isLength({max:10}),
    //body('password2','Password must be atleast 5 characters').isLength({min:5}),
], async (req, res)=> {
    
    let success = false;
    // if there is erroe return bad request and error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: errors.array() });
    }
    
    //check wether user with this email exist already
    try{
    let user = await User.findOne({email: req.body.email, username: req.body.username});
    if(user){
          return res.status(400).json({success, error: "Sorry a user with this email and username exist"})
    }

    const salt =  await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    user= await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass,
        address: req.body.address,
        contact_no: req.body.contact_no,
       // password2: req.body.password2,

    })
    
    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
   
    success=true;
    res.status(200).send({'auth':authtoken, 'success':success})
} catch (error){
    console.error(error.message);
    res.status(500).send("Internal server error");
}
})

//Route2: authenticate a user
router.post('/login',[
    body('username','Enter a valid name').isLength({min:3}),
    body('password','Password cannot be blank').exists(),
    
], async (req, res)=> {
    let success = false
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

 const username = req.body.username;
 const password  = req.body.password;
 try {
    let user = await User.findOne({username});
    if(!user){   
        success = false  
        return res.status(400).json({success, error: "Please try to login with correct credentials"})
    }
    const passwordCompare = bcrypt.compare( password, user.password);
    if(!passwordCompare){
        success = false
        return res.status(400).json({success, error: "Please try to login with correct credentials"})
    }
    
    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    
    res.status(200).send({'auth':authtoken, 'success':success})
     
 } catch (error) {

    console.error(error.message);
    res.status(500).send("Internal server error");  
     
 }
   
    
})

//Route3: getuser details
router.post('/lgetuser', fetchuser , async (req, res)=> {

try {
    userId = req.user.id;
    const user = await user.findById(userId).select("-password")
    res.send(user)
    
} catch (error) {
    onsole.error(error.message);
    res.status(500).send("Internal server error");   
}
})


module.exports = router
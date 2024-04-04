const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const { hash } = require('bcrypt')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.json('test is working')
}

//register end point
const registerUser = async (req, res) => {
  try{
    const {name, password} = req.body;
    // check if name was entered
    if(!name) {
      return res.json({
        error: 'name is required'
      })
    };
    //check if password is good
    if(!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long"
      })
    };  

    //check username
    const exist = await User.findOne({ name });
    if (exist) {
      return res.json({
        error: "User name taken",
      });
    }
    
    const hashedPassword = await hashPassword(password)

    const user = await User.create({
      name, 
      password: hashedPassword, 
    });

    return res.json(user);
  } catch(error) {
      console.log(error)
  } 
};

// Login end point
const loginUser = async (req, res) => {
  try {
    const {name, password} = req.body;

    //check if user exist
    const user = await User.findOne({name});
    if(!name) {
      return res.json({
        error: 'Wrong user name or password'
      })
    }

    //check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign({name: user.name, id: user._id}, process.env.JWT_SECRET, {}, (err, token) => {
        if(err) throw err;
        res.cookie('token', token).json(user)
      })
    } 
    if (!match) {
      return res.json({
        error: 'Wrong user name or password'
      })
    }
  } catch (error) {
      console.log(error)
  }
}

module.exports = {
  test,
  registerUser,
  loginUser,
}
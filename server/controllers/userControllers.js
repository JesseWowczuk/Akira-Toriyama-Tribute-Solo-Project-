const User = require('../models/user')

const test = (req, res) => {
  res.json('test is working')
}

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

    const user = await User.create({
      name, password
    });

    return res.json(user)
  } catch(error) {
      console.log(error)
  }
}

module.exports = {
  test,
  registerUser
}
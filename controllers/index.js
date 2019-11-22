const User = require('../models/Users')
const signToken = require('../auth').signToken

module.exports = {
    //list users
    index: (req, res) => {
        User.find({}, (err, users) => {
            res.json(users)
        })
    },

    //get 1 user 
    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            res,json(user)
        })
    },

    //make new user
    create: (req, res) => {
        console.log('in user create')
        User.create(req.body, (err, user) => {
               if(err) return res.json({success: 'no', code: err.code})
            //generate a jwt and return it to client afteer user is created
            const token = signToken(user)
            res.json({success: true, message: "User created. Token attatched.", token})
        })
    },

    //update existing user
    update: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                res.json({success: true, message: "User updated.", user})
            })
        })
    },

    //dlete user
    destroy: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            res.json({success: true, message: "User deleted.", user})
        })
    },

    //login route
authenticate: (req, res) => {
    //see if the user exist
    User.findOne({username: req.body.email}, (err,user) => {
        //of theres no user or the password is invalid
        if(!user || !user.validPassword(req.body.password)) {
            //deny access
            return res.json({ success: false, message: "Invalid credentials." })
        }

        const token = signToken(user)
        res.json({success:true, message: "Token attatched", token})
    })
  }
}

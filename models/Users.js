
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: { type: String, required: true, unique: true },
    password: {type: String, required: true }
})

//adds meethod to user object to make a hashed password 
userSchema.methods.generateHash = function (password) {
    return bcrypt.compareSync(password, bcrypt.genSaltSync(8))
}

//adds method to user document object, checks if password is correct
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}


//middleware: before it saves it checks if the password changed
//and if so, encrypt new password before saving
userSchema.pre('save', function(next) {
    console.log(`Just triggered the pre save hook`)
    console.log(this.isModified('password')) 
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password)
       }
       next()
})

const User = mongoose.model('User', userSchema)
module.exports= User
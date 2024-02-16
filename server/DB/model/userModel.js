const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    firstName: String,
    secondName: String,
    lastName: String

})

userSchema.path('email').validate(async function (email) {
    const isEmailExist = await mongoose.model('User').findOne({ email });

    if (isEmailExist) {
        throw new Error('email already exists');
    }
});


userSchema.virtual('repeatPassword').set(function (value) {
    if (value != this.password) { throw new Error('password missmatch') }
})

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

const User = mongoose.model('User', userSchema)
module.exports = User
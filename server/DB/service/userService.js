const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const User = require('../model/userModel');

function register(userData) {
    return User.create(userData);
};

async function login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('email or password is incorrect1')
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        throw new Error('email or password is incorrect2')
    }

    const payload = { _id: user._id, email: user.email, username: user.username }
    const token = await jwt.sign(payload, 'secret')
    return { token, payload }
}




module.exports = {
    register,
    login
}
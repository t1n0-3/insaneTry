const express = require('express')
const cors = require('cors')
const { PORT, AuthEndpoints } = require('./CONSTANTS')
const { default: mongoose } = require('mongoose')
const connectToDb = require('./DB/connectionDb')
const userService = require('./DB/service/userService')
const cookieParser = require('cookie-parser')

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser())

connectToDb()

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post(AuthEndpoints.LOGOUT, (req, res) => {
    res.clearCookie('token').sendStatus(200);
})

app.post(AuthEndpoints.LOGIN, async (req, res) => {
    const { email, password } = req.body

    try {
        const { token, payload } = await userService.login(email, password)
        res.cookie('token', token, { maxAge: 900000, httpOnly: true });
        res.status(200).json({ status: 'Login successful', userData: payload });
    } catch (err) {
        res.status(404).json({ status: 'email or password is incorrect3' });
    }
});

app.post(AuthEndpoints.REGISTER, async (req, res) => {
    try {
        await userService.register(req.body)
        res.status(200).json({ status: 'successfully' });
    } catch (err) {
        res.status(404).json({ status: 'email already exist' });
    }
});
app.listen(PORT, () => console.log('Server is working...'))
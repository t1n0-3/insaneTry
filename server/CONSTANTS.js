const PORT = 3000

const DB_URL = 'mongodb://127.0.1:27017/BlogData'

const AuthEndpoints = {
    LOGIN: '/login',
    REGISTER: '/register',
    LOGOUT: '/logout'
}



module.exports = {
    PORT,
    DB_URL,
    AuthEndpoints
}
import { useNavigate } from 'react-router-dom'

import axios from '../../api/axios'
import useAuthForm from '../../hook/useAuthForm'
import { AuthEndpoints } from '../../CONSTANTS'
import { useContext } from 'react'
import { authContext } from '../../context/authContext'

import './Login.css'

export default function Login() {

    const navigate = useNavigate()
    const { formValues, onChanegHandle } = useAuthForm({ email: '', password: '' })
    const { setAuth, theme } = useContext(authContext)
    async function onLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post(AuthEndpoints.LOGIN, formValues, { headers: { 'Content-type': 'application/json' } })
            const { userData } = response.data
            setAuth(userData)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={onLogin} className="loginForm">
            <h2>LOGN</h2>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='email' placeholder="email"></input>
            </div>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="password" name='password' placeholder="password"></input>
            </div>
            <button className='onLoginSubmit' type='submit'>LOGIN</button>
        </form>
    )
}
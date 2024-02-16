import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import FirstForm from './formsRegister/firstLayer'
import SecondForm from './formsRegister/SecondLayer'
import { AuthEndpoints } from '../../CONSTANTS'
import axios from '../../api/axios'
import useAuthForm from '../../hook/useAuthForm'

import './Register.css'


export default function Register() {

    const navigate = useNavigate()
    const { formValues, onChanegHandle } = useAuthForm({})
    const [formNumber, setFormNumber] = useState(1)

    async function onRegister(e) {
        e.preventDefault()
        if (formNumber <= 2) {
            setFormNumber(prev => prev + 1)
        }
        if (formNumber == 2) {
            try {

                await axios.post(AuthEndpoints.REGISTER, formValues, { headers: { 'Content-type': 'application/json' } })
                setFormNumber(1)
                navigate('/login')
            } catch (err) {
                console.log(err)
                setFormNumber(1)
            }
        }
    }

    const commonProps = {
        formValues,
        onChanegHandle,
        onRegister,
    };

    return (
        <>
            {formNumber === 1 && <FirstForm {...commonProps} />}
            {formNumber === 2 && <SecondForm {...commonProps} />}
        </>
    )
}

import '../Register.css'

export default function FirstForm({ formValues, onChanegHandle, onRegister }) {
    return (
        <form onSubmit={onRegister} className="registerForm">
            <h2>REGISTER</h2>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='email' defaultValue={formValues.email} placeholder="email"></input>
            </div>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="text" name='username' defaultValue={formValues.username} placeholder="username"></input>
            </div>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="password" name='password' defaultValue={formValues.password} placeholder="password"></input>
            </div>
            <div className="lightInput">
                <input onChange={onChanegHandle} type="password" name='repeatPassword' defaultValue={formValues.repeatPassword} placeholder="repeatPassword"></input>
            </div>
            <button className='onRegisterSubmit' type='submit'>REGISTER</button>
        </form>
    )
}
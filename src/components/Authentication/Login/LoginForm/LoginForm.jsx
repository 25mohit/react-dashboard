import React from 'react'
import Input from '../../../Helpers/FormInput/Input'

const LoginForm = () => {
  return (
    <div className='login-form'>
        <div className='top'>
            <h2>Hi, Welcome Back</h2>
        </div>
        <form action="post">
            <div className="Input">
                <Input type="text" placeholder="Please Enter you name" name="email"/>
            </div>
            <div className="Input">
                <Input type="password" placeholder="Please Enter you password" name="password"/>
            </div>
            <div className="flex-bar">
                <div>
                    <input type="checkbox" name="keepMe" id="keepMe" />
                    <label htmlFor="keepMe">Keep me logged in</label>
                </div>
                <div>
                    <span className="forget">Forgot Password?</span>
                </div>
            </div>
            <button onClick={e => e.preventDefault()}>Sign In</button>
        </form>
        <p className="label-line">Don't have an account?</p>
    </div>
  )
}

export default LoginForm
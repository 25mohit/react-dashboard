import React from 'react'
import AuthServiceContainer from '../../../../Common/Layout/Authentication/AuthServiceContainer/AuthServiceContainer'
import LoginForm from '../../LoginForm/LoginForm'

const LoginType1 = () => {
  return (
    <AuthServiceContainer>
        <LoginForm />
    </AuthServiceContainer>
  )
}

export default LoginType1
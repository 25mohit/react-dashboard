import React, { useState } from 'react'
import { atom, useRecoilState } from 'recoil'

const AuthServiceContainer = props => {

  const isLoggedIn = localStorage.getItem('isUserLoggedIn')

console.log("isLoggedIn", isLoggedIn);
  return (
    <>
    {
      !isLoggedIn ? <div className='auth_service-container'>{props.children}</div> : null
    }
    </>
    
  )
}

export default AuthServiceContainer
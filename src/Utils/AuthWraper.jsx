import { useEffect, useState } from "react"
import { atom, useRecoilState } from "recoil"

const AuthWraper = props => {
    const { children } = props
    
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {
      setIsLoggedIn(Boolean(localStorage.getItem('isUserLoggedIn')))
    },[])
    
    console.log("isLoggedIn", typeof(isLoggedIn), isLoggedIn);
  return (
    <>
        {
            isLoggedIn ? children : null
        }
    </>
    
  )
}

export default AuthWraper
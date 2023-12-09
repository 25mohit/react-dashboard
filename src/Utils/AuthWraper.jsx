import { useEffect, useState } from "react"

const AuthWraper = props => {
    const { children } = props
    
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {
      setIsLoggedIn(Boolean(localStorage.getItem('isUserLoggedIn')))
     
    },[])
    
    console.log("isLoggedIn23", typeof(isLoggedIn), isLoggedIn);
  return (
    <>
        {
            isLoggedIn ? children : null
        }
    </>
    
  )
}

export default AuthWraper
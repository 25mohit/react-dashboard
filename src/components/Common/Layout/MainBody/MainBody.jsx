import { useEffect, useState } from "react";
import StaticSidebar from "../../StaticSidebar/StaticSidebar"
import { atom, useRecoilState } from "recoil";

const MainBody = props => {
  
  const charAtom = atom({
    key:'toogleState',
    default: false
})

const [toogleState, setToogleState] = useRecoilState(charAtom)
const [bodyWidth, setBodyWidth] = useState('19rem')

useEffect(() => {
  var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  setBodyWidth(rs.getPropertyValue('--sidebar-width'));
  // alert("The value of --blue is: " + rs.getPropertyValue('--sidebar-width'));
}
myFunction_get()
},[toogleState])

console.log("a7d8a7sd", toogleState, bodyWidth);

  return (
    <div className={`body-main-ui `} >
      <StaticSidebar />
      <div className="body_container">
        {props.children}
      </div>
    </div>
  )
}

export default MainBody
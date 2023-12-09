import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSlack } from "react-icons/fi"
// import { GoSettings } from "react-icons/go"
import { IoSettings } from "react-icons/io5";

import { HiUserGroup } from "react-icons/hi"
import { SiJirasoftware } from "react-icons/si"
import { IoIosArrowBack } from "react-icons/io"
import { FaBell, FaBoxOpen, FaBoxes, FaStickyNote, FaUserAlt, FaUserAstronaut } from "react-icons/fa"
import { AiFillBulb, AiFillPieChart } from "react-icons/ai"
import Admin from '../../../assets/Images/Admin/AdminLogo.jpg'
import { MdAccountBalance, MdEdit, MdEmail, MdMarkEmailUnread, MdOutlineAccountBalance, MdTaskAlt } from "react-icons/md"
import { RiDashboardFill, RiMessage2Fill, RiSettings4Fill } from "react-icons/ri"
import { SidebarOption } from './Options'
import { BsBell, BsFillArrowDownCircleFill, BsFillArrowRightCircleFill, BsFillHandbagFill, BsFolderMinus, BsGraphUp, BsListTask, BsPatchPlusFill, BsShop } from "react-icons/bs"
import { atom, useRecoilState } from 'recoil'
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { BiSolidOffer } from 'react-icons/bi';
import { GoTasklist } from "react-icons/go";

const StaticSidebar = () => {

    const icons = [
        {name: 'Dashboard', icon: <FaHome id='icon'/>},
        {name: 'Orders', icon: <FaBoxOpen  id='icon'/>},
        {name: 'Notification', icon: <FaBell id='icon'/>},
        {name: 'Items', icon: <FaBoxes id='icon'/>},
        {name: 'Message', icon: <FaMessage id='icon'/>},
        {name: 'Email', icon: <MdMarkEmailUnread  id='icon'/>},
        {name: 'Sales', icon: <BiSolidOffer  id='icon'/>},
        {name: 'Tasks', icon: <GoTasklist  id='icon'/>},
        {name: 'Users', icon: <FaUserAstronaut  id='icon'/>},
        {name: 'Account', icon: <MdOutlineAccountBalance  id='icon'/>},
    ]
    const charAtom = atom({
        key:'toogleState',
        default: false
    })

    const [toogleSidebar, setToogleSidebar] = useState(false)
    const [toogleState, setToogleState] = useRecoilState(charAtom)

    const allToogleOff = () => {
        
    }
    
    console.log("toogleState", toogleState);
    const setBackgroundTheme = (color) => {
        localStorage.setItem('mainDashTheme', color)
        window.location.reload()
    }
     
  var r = document.querySelector(':root');

  // Create a function for getting a variable value
  function myFunction_get() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    console.log("adad", rs.getPropertyValue('--sidebar-width'));
    // Alert the value of the --blue variable
    // alert("The value of --blue is: " + rs.getPropertyValue('--sidebar-width'));
  }
  
  console.log("myFunction_get", myFunction_get());
  // Create a function for setting a variable value
  function myFunction_set(property) {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--sidebar-width', property);
  }

    const toogleHandler = () => {
        setToogleSidebar(!toogleSidebar)
        myFunction_get()
        if(toogleSidebar){
            setToogleState(false)
            myFunction_set('19rem')
            // localStorage.setItem('sidebarToogled', false)
        } else {
            setToogleState(true)
            myFunction_set('70px')
            // localStorage.setItem('sidebarToogled', true)
        }
    }

    const [crntIndx, setCrntIndx] = useState(null)
    const [toogleOption, setToogleOption] = useState('')
    const [activeOpt, setActiveOpt] = useState('')

    useEffect(() => {
        setActiveOpt(window.location.href.split('/')?.[3])
        setToogleOption(window.location.href.split('/')?.[3])
        setCrntIndx(Number(localStorage.getItem('selectedItemIndx')))
      },[])

    const optionChangeHandler = (opt, ind) => {
        localStorage.setItem('selectedItemIndx', ind)
        setToogleOption(opt?.name)
        setActiveOpt(opt?.name)
        setCrntIndx(ind)
    }

  return (
    <div className={`static-sidebar ${toogleSidebar ? 'active' : ''}`}>
        <div className="profile">
            <div>
                <div>
                    <img src={ Admin } alt="" />
                    { toogleSidebar && <IoIosArrowBack id='toogle_icon' onClick={toogleHandler}/> }
                </div>
                <div>
                    <span>Good Day🤚</span>
                    <h3>Mohit Agarwal</h3>
                </div>
            </div>
            <div>
                <IoIosArrowBack onClick={toogleHandler}/>
            </div>
        </div>
        <div className="section">
              <div className="head">
                  <span>Menu { !toogleSidebar && <strong>: 6</strong>}</span>
                  <span><BsFolderMinus id='toogle-all' onClick={allToogleOff}/></span>
              </div>
              {SidebarOption?.map((option, indx) =>
                <div key={indx} className={`menu ${toogleSidebar ? 'active' : ''}`} onClick={() => optionChangeHandler(option, indx)}>
                <Link to={option?.link} >
                    <div>
                        <div className={((toogleOption === activeOpt) && crntIndx === indx) ? 'selected_div' : 'non-selected'} />
                        {/* <MdAccountBalance id='icon'/> */}
                        {icons?.filter(d => d.name === option.name)?.[0]?.icon}
                        <i class={option?.icon} id='icon'></i>
                        
                        { !toogleSidebar && <h4>{option.name}</h4> }
                        { option?.nested?.length > 0 && !toogleSidebar && <BsFillArrowRightCircleFill id='drop_icon'/> }
                    </div>
                { toogleSidebar && <span className='quick_name'>{option.name}</span>}
                </Link>
                {
                    (toogleOption === option?.name) && open && !toogleSidebar && option?.nested?.length > 0 && option?.nested?.map((option, indx) =>  
                        <div className="children" key={indx}>
                            <Link to={option?.link}><h5>{option?.name}</h5></Link>
                        </div>
                )}
            </div>
              )}
        </div>
        { !toogleSidebar && <div className="section">
              <div className="head">
                    <span>Themes</span>
              </div>
              <div className="card settings theme-container">
                    <div className='color-theme dark' onClick={() => setBackgroundTheme('dark')}/>
                    <div className='color-theme deepBlue' onClick={() => setBackgroundTheme('deepBlue')}/>
                    <div className='color-theme orange' onClick={() => setBackgroundTheme('orange')}/>
                    <div className='color-theme light' onClick={() => setBackgroundTheme('light')}/>
              </div>
        </div> }
        { !toogleSidebar && <div className="section">
              <div className="head">
                  <span>Settings: <strong>6</strong></span>
                  <MdEdit />
              </div>
              <div className="card settings">
                  <div><FaStickyNote /></div>
                  <div><FaUserAlt /></div>
                  <div><IoSettings /></div>
                  <div><AiFillPieChart /></div>
                  <div><RiSettings4Fill /></div>
                  <div><AiFillBulb /></div>
              </div>
        </div> }
    </div>
  )
}

export default StaticSidebar
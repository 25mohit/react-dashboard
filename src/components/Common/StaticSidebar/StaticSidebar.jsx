import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSlack } from "react-icons/fi"
import { GoSettings } from "react-icons/go"
import { HiUserGroup } from "react-icons/hi"
import { SiJirasoftware } from "react-icons/si"
import { IoIosArrowBack } from "react-icons/io"
import { FaStickyNote, FaUserAlt } from "react-icons/fa"
import { AiFillBulb, AiFillPieChart } from "react-icons/ai"
import Admin from '../../../assets/Images/Admin/AdminLogo.jpg'
import { MdAccountBalance, MdEdit, MdEmail, MdTaskAlt } from "react-icons/md"
import { RiDashboardFill, RiMessage2Fill, RiSettings4Fill } from "react-icons/ri"
import { SidebarOption } from './Options'
import { BsBell, BsFillArrowDownCircleFill, BsFillArrowRightCircleFill, BsFillHandbagFill, BsFolderMinus, BsGraphUp, BsListTask, BsPatchPlusFill, BsShop } from "react-icons/bs"
import Menu from './Supporters/Menu'

const StaticSidebar = ({ toogle, currentState }) => {

    const allToogleOff = () => {
        
    }

    const setBackgroundTheme = (color) => {
        console.log("color", color);
        localStorage.setItem('mainDashTheme', color)
        window.location.reload()
    }
    const toogleHandler = () => {
        toogle(!currentState)
    }

    const [URL, setURL] = useState('')
    const [Active, setActive] = useState(false)

    useEffect(() => {
        const location = window.location.href?.split('/')?.[3]
        console.log("location", location);
        setURL(location)
    },[Active])

    console.log("URL", URL);
  return (
    <div className={`static-sidebar ${currentState ? 'active' : ''}`}>
        <div className="profile">
            <div>
                <div>
                    <img src={ Admin } alt="" />
                    { currentState && <IoIosArrowBack id='toogle_icon' onClick={toogleHandler}/> }
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
                  <span>Menu { !currentState && <strong>: 6</strong>}</span>
                  <span><BsFolderMinus id='toogle-all' onClick={allToogleOff}/></span>
              </div>
              {SidebarOption?.map((option, indx) =>
                <Menu option={option} currentState={currentState} URL={URL} setActive={setActive}/>
              )}
        </div>
        {/* <div className="section">
              <div className="head">
                  <span>Services: <strong>3</strong></span>
                  <MdEdit />
              </div>
              <div className="card">
                    <div>
                        <SiJirasoftware />
                        <h3>Jira Software</h3>
                    </div>
                    <div>
                        <FiSlack />
                        <h3>Slack</h3>
                    </div>
                    <div>
                        <SiJirasoftware />
                        <h3>Intercom</h3>
                    </div>
                    <div>
                        <BsPatchPlusFill />
                        <h3>Add new plugin</h3>
                    </div>
              </div>
        </div> */}
        {/* <div className="section">
              <div className="head">
                    <span>Themes</span>
              </div>
              <div className="card settings theme-container">
                    <div className='color-theme dark' onClick={() => setBackgroundTheme('dark')}/>
                    <div className='color-theme deepBlue' onClick={() => setBackgroundTheme('deepBlue')}/>
                    <div className='color-theme orange' onClick={() => setBackgroundTheme('orange')}/>
                    <div className='color-theme light' onClick={() => setBackgroundTheme('light')}/>
              </div>
        </div> */}
        {/* <div className="section">
              <div className="head">
                  <span>Settings: <strong>6</strong></span>
                  <MdEdit />
              </div>
              <div className="card settings">
                  <div><FaStickyNote /></div>
                  <div><FaUserAlt /></div>
                  <div><GoSettings /></div>
                  <div><AiFillPieChart /></div>
                  <div><RiSettings4Fill /></div>
                  <div><AiFillBulb /></div>
              </div>
        </div> */}
    </div>
  )
}

export default StaticSidebar
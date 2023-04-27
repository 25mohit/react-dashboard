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

const StaticSidebar = ({ toogle, currentState }) => {

    const allToogleOff = () => {
        
    }
    
    const setBackgroundTheme = (color) => {
        localStorage.setItem('mainDashTheme', color)
        window.location.reload()
    }
    const toogleHandler = () => {
        toogle(!currentState)
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
                <div key={indx} className={`menu ${currentState ? 'active' : ''}`} onClick={() => optionChangeHandler(option, indx)}>
                <Link to={option?.link} >
                    <div>
                        <div className={((toogleOption === activeOpt) && crntIndx === indx) ? 'selected_div' : 'non-selected'} />
                        <MdAccountBalance id='icon'/>
                        { !currentState && <h4>{option.name}</h4> }
                        { option?.nested?.length > 0 && !currentState && <BsFillArrowRightCircleFill id='drop_icon'/> }
                    </div>
                { currentState && <span className='quick_name'>{option.name}</span>}
                </Link>
                {
                    (toogleOption === option?.name) && open && !currentState && option?.nested?.length > 0 && option?.nested?.map((option, indx) =>  
                        <div className="children" key={indx}>
                            <Link to={option?.link}><h5>{option?.name}</h5></Link>
                        </div>
                )}
            </div>
              )}
        </div>
        { !currentState && <div className="section">
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
        { !currentState && <div className="section">
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
        </div> }
    </div>
  )
}

export default StaticSidebar
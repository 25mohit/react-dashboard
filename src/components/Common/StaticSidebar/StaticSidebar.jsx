import { useState } from 'react'
import Admin from '../../../assets/Images/Admin/AdminLogo.jpg'
import { RiDashboardFill, RiMessage2Fill, RiSettings4Fill } from "react-icons/ri"
import { SiJirasoftware } from "react-icons/si"
import { FiSlack } from "react-icons/fi"
import { GoSettings } from "react-icons/go"
import { AiFillBulb, AiFillPieChart } from "react-icons/ai"
import { FaStickyNote, FaUserAlt } from "react-icons/fa"
import { MdAccountBalance, MdEdit } from "react-icons/md"
import { BsBell, BsFillArrowDownCircleFill, BsFillArrowRightCircleFill, BsFillHandbagFill, BsFolderMinus, BsListTask, BsPatchPlusFill, BsShop } from "react-icons/bs"
import { Link } from 'react-router-dom'

const StaticSidebar = () => {
const [toogleOption, setToogleOption] = useState({
    sales:false,
    items:false,
})

const allToogleOff = () => {
    setToogleOption({
        sales:false,
        items:false,
    })
}

  return (
    <div className='static-sidebar'>
        <div className="profile">
            <div>
                <img src={ Admin } alt="" />
            </div>
            <div>
                <span>Good Day🤚</span>
                <h3>Mohit Agarwal</h3>
            </div>
        </div>
        <div className="section">
              <div className="head">
                  <span>Menu: <strong>6</strong></span>
                  <span><BsFolderMinus id='toogle-all' onClick={allToogleOff}/></span>
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <RiDashboardFill id='icon'/>
                            <h4><Link to='/'>Dashboard</Link></h4>
                        </div>
                    </div>
                    <div></div>
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <BsListTask id='icon'/>
                            <h4>My Project Task</h4>
                        </div>
                        <div>
                            <BsFillArrowRightCircleFill id='icon'/>
                        </div>
                    </div>
                    <div></div>
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <BsFillHandbagFill id='icon'/>
                            <h4>Sales</h4>
                        </div>
                        <div>
                            { !toogleOption.sales ? 
                                    <BsFillArrowRightCircleFill id='icon' onClick={() => setToogleOption({...toogleOption, sales: true})}/> :
                                    <BsFillArrowDownCircleFill id='icon' onClick={() => setToogleOption({...toogleOption, sales: false})}/> }
                        </div>
                    </div>
                    { toogleOption.sales && <div className="sub-menu">
                            <h4><Link to='/sales/orders'>Orders</Link></h4>
                            <h4>Pending</h4>
                            <h4>Completed</h4>
                    </div> }
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <BsBell id='icon'/>
                            <h4>Notification</h4>
                        </div>
                        <div>
                            <p className="notify">5</p>
                        </div>
                    </div>
                    <div></div>
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <BsShop id='icon'/>
                            <h4>Items</h4>
                        </div>
                        <div>
                            { !toogleOption.items ? 
                                    <BsFillArrowRightCircleFill id='icon' onClick={() => setToogleOption({...toogleOption, items: true})}/> :
                                    <BsFillArrowDownCircleFill id='icon' onClick={() => setToogleOption({...toogleOption, items: false})}/> }
                        </div>
                    </div>
                    { toogleOption.items && <div className="sub-menu">
                            <h4><Link to='/items/listed-item'>Listed</Link></h4>
                            <h4><Link to='/items/draft-item'>Draft</Link></h4>
                            <h4><Link to='/items/scheduled-item'>Scheduled</Link></h4>
                            <h4><Link to='/items/unsold-item'>Unsold</Link></h4>
                    </div> }
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <RiMessage2Fill id='icon'/>
                            <h4><Link to='/message'>Message</Link></h4>
                        </div>
                        <div>
                            <p className="notify">6</p>
                        </div>
                    </div>
                    <div>
                    </div>
              </div>
              <div className="menu">
                    <div>
                        <div>
                            <MdAccountBalance id='icon'/>
                            <h4>Account</h4>
                        </div>
                        <div />
                    </div>
                    <div></div>
              </div>
        </div>
        <div className="section">
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
        </div>
        <div className="section">
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
        </div>
    </div>
  )
}

export default StaticSidebar
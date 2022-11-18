import React from 'react'
import Admin from '../../../assets/Images/Admin/AdminLogo.jpg'
import { RiDashboardFill, RiSettings4Fill } from "react-icons/ri"
import { SiJirasoftware } from "react-icons/si"
import { FiSlack } from "react-icons/fi"
import { GoSettings } from "react-icons/go"
import { AiFillBulb, AiFillPieChart } from "react-icons/ai"
import { FaStickyNote, FaUserAlt } from "react-icons/fa"
import { MdAccountBalance, MdEdit, MdEmail } from "react-icons/md"
import { BsFillArrowRightCircleFill, BsFillCartCheckFill, BsFillHandbagFill, BsListTask, BsPatchPlusFill, BsShop } from "react-icons/bs"

const StaticSidebar = () => {
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
              </div>
              <div className="menu">
                  <div>
                      <RiDashboardFill id='icon'/>
                      <h4>Dashboard</h4>
                  </div>
                  <div>
                  </div>
              </div>
              <div className="menu">
                  <div>
                      <BsListTask id='icon'/>
                      <h4>My Project Task</h4>
                  </div>
                  <div>
                      <BsFillArrowRightCircleFill id='icon'/>
                  </div>
              </div>
              <div className="menu">
                  <div>
                      <BsShop id='icon'/>
                      <h4>Items</h4>
                  </div>
                  <div>
                      <BsFillArrowRightCircleFill id='icon'/>
                  </div>
              </div>
              <div className="menu">
                  <div>
                      <BsFillCartCheckFill id='icon'/>
                      <h4>Orders</h4>
                  </div>
                  <div>
                      <BsFillArrowRightCircleFill id='icon'/>
                  </div>
              </div>
              <div className="menu">
                  <div>
                      <BsFillHandbagFill id='icon'/>
                      <h4>Sales</h4>
                  </div>
                  <div>
                      <BsFillArrowRightCircleFill id='icon'/>
                  </div>
              </div>
              <div className="menu">
                  <div>
                      <MdEmail id='icon'/>
                      <h4>Inbox</h4>
                  </div>
                  <div>
                      <BsFillArrowRightCircleFill id='icon'/>
                  </div>
              </div>
              <div className="menu">
                  <div>
                      <MdAccountBalance id='icon'/>
                      <h4>Account</h4>
                  </div>
                  <div />
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
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ImHome } from 'react-icons/im'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { MdOutlineSettingsAccessibility } from 'react-icons/md'
import { RiPagesFill, RiSettingsLine } from 'react-icons/ri'

const DashboardUI = () => {
    const [toogleActive, setToogleActive] = useState()
    
    const location = window.location.href.split('/')[4]

  return (
    <MainBody>
        <div className="dashboard-main">
            <div className="header" >
                <h1>Welcome to your Premium Complete Customiziable Dashboard</h1>
                <div>
                    <p>Completed eCommerce Solution.</p>
                    <p>Since&nbsp;2007</p>
                </div>
            </div>
            <div className="nevbar">
                <Link to='/dashboard/home' className={ location === 'home' ? 'active' : '' } onClick={ () => setToogleActive(1)}>
                    <p><ImHome /> &nbsp;Home</p>
                </Link>
                <Link to='/dashboard/pages' className={ location === 'pages' ? 'active' : '' } onClick={ () => setToogleActive(2)}>
                    <p><RiPagesFill />&nbsp;Pages</p>
                </Link>
                <Link to='/dashboard/quick-settings' className={ location === 'quick-settings' ? 'active' : '' } onClick={ () => setToogleActive(3)}>
                    <p><RiSettingsLine />&nbsp;Quick Setting</p>
                </Link>
                <Link to='/dashboard/user-settings' className={ location === 'user-settings' ? 'active' : '' } onClick={ () => setToogleActive(4)}>  
                    <p><MdOutlineSettingsAccessibility />&nbsp;User Setting</p>
                </Link>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    </MainBody>
  )
}

export default DashboardUI
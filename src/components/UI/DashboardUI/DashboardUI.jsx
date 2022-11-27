import MainBody from '../../Common/Layout/MainBody/MainBody'
import { ImHome } from 'react-icons/im'
import { MdOutlineSettingsAccessibility } from 'react-icons/md'
import { RiPagesFill, RiSettingsLine } from 'react-icons/ri'
import { useState } from 'react'

const DashboardUI = () => {
    const [toogleActive, setToogleActive] = useState(1)

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
            <nev className="nevbar">
                <div className={ toogleActive === 1 ? 'active' : '' } onClick={ () => setToogleActive(1)}>
                    <ImHome />
                    <p>Home</p>
                </div>
                <div className={ toogleActive === 2 ? 'active' : '' } onClick={ () => setToogleActive(2)}>
                    <RiPagesFill />
                    <p>Pages</p>
                </div>
                <div className={ toogleActive === 3 ? 'active' : '' } onClick={ () => setToogleActive(3)}>
                    <RiSettingsLine />
                    <p>Quick Setting</p>
                </div>
                <div className={ toogleActive === 4 ? 'active' : '' } onClick={ () => setToogleActive(4)}>
                    <MdOutlineSettingsAccessibility />
                    <p>User Setting</p>
                </div>
            </nev>
        </div>
    </MainBody>
  )
}

export default DashboardUI
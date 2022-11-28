import React, { useState } from 'react'
import { MdOutlineLocalOffer } from 'react-icons/md'
import DashboardChart from '../../../Helpers/Chart/DashboardChart'
import MostSoldProduct from '../../../Helpers/MostSoldProduct/MostSoldProduct'

const HomeUI = () => {

  return ( 
    <div className='dashboard-home'>
        <div className="card-container">
            <div>
                <span><MdOutlineLocalOffer /></span>
                <h2>714K</h2>
                <p>Weekly Sales</p>
            </div>
            <div>
                <span><MdOutlineLocalOffer /></span>
                <h2>714K</h2>
                <p>Weekly Sales</p>
            </div>
            <div>
                <span><MdOutlineLocalOffer /></span>
                <h2>714K</h2>
                <p>Weekly Sales</p>
            </div>
            <div>
                <span><MdOutlineLocalOffer /></span>
                <h2>714K</h2>
                <p>Weekly Sales</p>
            </div>
        </div>
        <div className="container">
            <div>
                <DashboardChart />
            </div>
            <div>
                <MostSoldProduct />
            </div>
        </div>
    </div>
  )
}

export default HomeUI
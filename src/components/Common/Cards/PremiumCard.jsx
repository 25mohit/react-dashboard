import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { MdReportGmailerrorred } from 'react-icons/md'

const PremiumCard = ({ design }) => {
  return (
    <div className={`premium-card-UI ${design}-card`} >
        <h3>Basic</h3>
        <div className="underline" />
        <div className="container-card">
            <h1>$99</h1>
            <p>Price Example</p>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div>
                <ul>
                  <li><BsCheck2 style={{color:'green'}}/>&nbsp;&nbsp;Tradition Offer</li>
                  <li><BsCheck2 style={{color:'green'}}/>&nbsp;&nbsp;Premium Offer</li>
                  <li><MdReportGmailerrorred style={{color:'rgb(255, 39, 39)'}}/>&nbsp;&nbsp;Exclusive Offer</li>
                </ul>
                <button>Get This Plan</button>
            </div>
        </div>
    </div>
  )
}

export default PremiumCard
import React from 'react'
import { RiFindReplaceLine } from 'react-icons/ri'
import { BsFilterSquare, BsFillSendFill } from 'react-icons/bs'

const EmailNav = ({ setToogleBtn, toogleBtn }) => {
    
  const emailToogleOption = [
    {value: 'inbox', name: 'Inbox'},
    {value: 'sent', name: 'Sent'},
    {value: 'all', name: 'All'},
    {value: 'deleted', name: 'Deleted'},
    {value: 'archive', name: 'Archive'},
  ]

  const optToogleHandler = (ind) => {
    setToogleBtn(ind)
  }
  return (
    <nav className='email-nav-main flex-center-between'>
              <div className="toogle-bar flex-center">
                {
                  emailToogleOption?.map((option, index) => <span onClick={() => optToogleHandler(index)} key={index} className={`toogle-btn ${toogleBtn === index ? 'active' : ''}`}>{option?.name}</span>)
                }
              </div>
              <div className="inbox-controls flex-center">
                <BsFillSendFill className='filter-icon'/>
                <RiFindReplaceLine className='filter-icon'/>
                <span className="filter flex-center filter-icon">
                  <BsFilterSquare />
                  Filter
                </span>
              </div>
            </nav>
  )
}

export default EmailNav
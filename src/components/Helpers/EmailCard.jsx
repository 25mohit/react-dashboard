import React from 'react'

const EmailCard = ({ active }) => {
  return (
    <div className={`email-card ${active ? 'active' : ''}`}>
        <span className="logo">FE</span>
        <div className="center flex-column">
        <div className='flex-center'>
            <h4>Mohit Agarwal</h4>
            <p className="tag">Interested</p>
        </div>
        <div className='flex-center'>
            <span className='email-subject'>
            Hi, i am looking for a job, kindly let me know if
            </span>
        </div>
        </div>
        <div className='flex-column'>
        <span className='email-time'>08.23</span>
        </div>
  </div>
  )
}

export default EmailCard
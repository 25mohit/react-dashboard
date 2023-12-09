import React from 'react'

const EmailCard = ({ active, data, setActiveEmail, ind }) => {
  
  return (
    <div className={`email-card ${active === ind ? 'active' : ''}`} onClick={() => setActiveEmail(ind)}>
        <span className="logo">{data?.iconName?.toUpperCase()}</span>
        <div className="center flex-column">
        <div className='name-head flex-center'>
            <h4>{data?.senderName}</h4>
            <p className="tag">Interested</p>
        </div>
        <div className='flex-center'>
            <span className='email-subject'>{data?.content}</span>
        </div>
        </div>
        <div className='flex-column'>
        <span className='email-time'>{data?.date}</span>
        </div>
  </div>
  )
}

export default EmailCard
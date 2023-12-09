import React from 'react'

const MessageCard = ({ onCancel, type }) => {
  return (
    <div className='message-modal'>
        <div className={`body ${type === 'delete' ? 'del' : ''}`}>
            <div>
                <h3>{ type ==='delete' ? 'Are you sure, you want to Delete ?' : '' }</h3>
            </div>
            <div>
                <button onClick={onCancel}><p>Cancel</p></button>
                <button onClick={onCancel}><p>Yes</p></button>
            </div>
        </div>
    </div>
  )
}

export default MessageCard
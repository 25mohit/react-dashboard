import MainBody from '../../Common/Layout/MainBody/MainBody'
import { FiSearch } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { useState } from 'react'
import EMAIL_MOC_DATA from '../../../MocData/EMAIL_MOC_DATA.JS'

const EmailUI = () => {
    const [toogleOpt, setToogleOpt] = useState(1)
    const [starEmail, setStarEmail] = useState(false)
    const [index, setIndex] = useState()

  return (
    <MainBody>
        <div className="email-main">
            <div className="inbox">
                <div className="bar">
                    <p className={toogleOpt === 1 ? 'active' : ''} onClick={() => setToogleOpt(1)}>All</p>
                    <p className={toogleOpt === 2 ? 'active' : ''} onClick={() => setToogleOpt(2)}>Sent</p>
                    <p className={toogleOpt === 3 ? 'active' : ''} onClick={() => setToogleOpt(3)}>Archive</p>
                    <p className={toogleOpt === 4 ? 'active' : ''} onClick={() => setToogleOpt(4)}>Deleted</p>
                    <span><FiSearch /></span>
                </div>
                <div className="container">
                    {
                        EMAIL_MOC_DATA?.map((dt, indx) => 
                            <div className={index === indx && 'active'} onClick={() => setIndex(indx)}>
                                <div>
                                    <span>{dt.iconName}</span>
                                </div>
                                <div className="body">
                                    <div>
                                        <p>{dt.senderName}</p>
                                        <p>{dt.date}</p>
                                    </div>
                                    <div>
                                        <h3>{dt.subject}</h3>
                                    </div>
                                    <div>
                                        <p>{dt.content}</p>
                                        <span className={starEmail ?'active' : ''} onClick={() => setStarEmail(true)}><AiFillStar /></span>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </div>
            <div className="inbox-body">

            </div>
        </div>
    </MainBody>
  )
}

export default EmailUI
import MainBody from '../../Common/Layout/MainBody/MainBody'
import EMAIL_MOC_DATA from '../../../MocData/EMAIL_MOC_DATA.JS'
import { useState } from 'react'
import { RiFindReplaceLine, RiMessage3Fill } from 'react-icons/ri'
import { BsCaretDown, BsCaretUp, BsFilterSquare, BsFillSendFill } from 'react-icons/bs'
import { TbArrowsDiagonal2 } from 'react-icons/tb'
import { TfiLayoutMenuSeparated } from 'react-icons/tfi'
import { IoMdClose } from 'react-icons/io'
import EmailCard from '../../Helpers/EmailCard'

const EmailUI = () => {
  const [toogleBtn, setToogleBtn] = useState(1)

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
    <MainBody>
        <div className="email-main">
            <header></header>
            <nav className='flex-center-between'>
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
            <div className="email-container flex-center">
              <div className="inbox flex-column">
                <EmailCard />
                <EmailCard  active={true}/>
                <EmailCard />
                <EmailCard/>
                <EmailCard/>
                <EmailCard />
                <EmailCard />
                <EmailCard />
                <EmailCard />
              </div>
              <div className="email-body">
                <nav className='flex-center-between'>
                  <div className="left flex-center">
                    <IoMdClose id='icon'/>
                    <TbArrowsDiagonal2 id='icon'/>
                    <BsCaretDown id='icon-border'/>
                    <BsCaretUp id='icon-border'/>
                  </div>
                  <div className='center flex-center'>
                    <h3>mohit agarwal</h3>
                    <span>10 hrs ago</span>
                  </div>
                  <div className="right flex-center">
                    <RiMessage3Fill id='icon'/>
                    <TfiLayoutMenuSeparated id='icon'/>
                  </div>
                </nav>
              </div>
            </div>
        </div>
    </MainBody>
  )
}

export default EmailUI
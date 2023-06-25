import { TbArrowsDiagonal2 } from 'react-icons/tb'
import { TfiLayoutMenuSeparated } from 'react-icons/tfi'
import { IoMdClose } from 'react-icons/io'
import { FaGlobeAfrica } from 'react-icons/fa'
import { BiArchiveIn } from 'react-icons/bi'
import { ImForward } from 'react-icons/im'
import { RiMessage3Fill } from 'react-icons/ri'
import { BsCaretDown, BsCaretUp, BsFolder2Open } from 'react-icons/bs'

const EmailBody = () => {
  return (
    <div className="email-body">
        <nav className='email-nav flex-center-between'>
            <div className="left flex-center">
            <IoMdClose id='icon'/>
            <TbArrowsDiagonal2 id='icon'/>
            <BsCaretDown id='icon-border'/>
            <BsCaretUp id='icon-border'/>
            </div>
            <div className='center flex-center'>
            <span>Verified Email   10 hrs ago</span>
            </div>
            <div className="right flex-center">
            <RiMessage3Fill id='icon'/>
            <TfiLayoutMenuSeparated id='icon'/>
            </div>
        </nav>
        <body className='body-main flex-column'>
            <div>
            <span className="location-tag">India</span>
            <span className='jd'>Related to Job Description</span>
            </div>
            <div className='email-info flex-column'>
            <h1>Mohit Agarwal</h1>
            <footer className='flex-center'>
                <span className='flex-center'><ImForward />Forward</span>
                <span className='flex-center'><BsFolder2Open />Primary</span>
                <span className='flex-center '><BiArchiveIn id='archive'/>Archive</span>
            </footer>
            </div>
            <div className="email-subject flex-column">
                <b>Subject :</b>
                <p>Hi, I have an Great Oppouctunity for you in My Company, as a Senior Full Stack Developer. If you
                    want to change you current Job, then i am glad to hear from you back
                </p>
                <p>Here is a Link for our website, you can visit the website to know more about us</p>
                <a className='flex-center' href="https://github.com/25mohit" target='_blank'><FaGlobeAfrica />mywebsite.com</a>
                <div className="email-signature flex-column">
                    <span>New Company INC.</span>
                    <span>+91-9680038708</span>
                    <span>Rajasthan, India</span>
                </div>
            </div>
        </body>
    </div>
  )
}

export default EmailBody
import MainBody from '../../Common/Layout/MainBody/MainBody'
import EMAIL_MOC_DATA from '../../../MocData/EMAIL_MOC_DATA.JS'
import { useState } from 'react'

import EmailCard from '../../Helpers/EmailCard'
import EmailBody from './EmailBody'
import EmailNav from '../../Helpers/EmailNav/EmailNav'

const EmailUI = () => {
  const [toogleBtn, setToogleBtn] = useState(2)
  const [activeEmail, setActiveEmail] = useState(2)

  console.log("EMAIL_MOC_DATA", EMAIL_MOC_DATA);
  return (
    <MainBody>
        <div className="email-main">
            <header></header>
            <EmailNav toogleBtn={toogleBtn} setToogleBtn={setToogleBtn}/>
            <div className="email-container flex-center">
              <div className="inbox flex-column">
                {
                  EMAIL_MOC_DATA?.map((email, ind) => <EmailCard key={ind} data={email} active={activeEmail} setActiveEmail={setActiveEmail} ind={ind}/>)
                }
              </div>
              <EmailBody />
            </div>
        </div>
    </MainBody>
  )
}

export default EmailUI
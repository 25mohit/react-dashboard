import React, { useEffect, useState } from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Menu = ({ option, currentState }) => {

    const [toogleOption, setToogleOption] = useState('')
    const [open, setOpen] = useState(false)
    const [currentURL, setCurrentURL] = useState('')

    const toogleHandler = ( option ) => {
        setToogleOption(option?.name)
        setOpen(!open)
    }
    const URL = window.location.href?.split('/')?.[3]

    useEffect(() => {
        const location = window.location.href?.split('/')?.[3]
        setCurrentURL(location)
        console.log("location", location);
    },[])
    
  return (
    <div className={`menu ${currentState ? 'active' : ''}`}>
        <Link to={option?.link} onClick={() => toogleHandler(option)}>
            <div >
                { (currentURL === URL) && <div className='selected_div' />}
                <MdAccountBalance id='icon'/>
                { !currentState && <h4>{option.name}</h4> }
                { option?.nested?.length > 0 && !currentState && <BsFillArrowRightCircleFill id='drop_icon'/> }
            </div>
        { currentState && <span className='quick_name'>{option.name}</span>}
        </Link>
        {
            (toogleOption === option?.name) && open && !currentState && option?.nested?.length > 0 && option?.nested?.map((option, indx) =>  
                <div className="children" key={indx}>
                    <Link to={option?.link}><h5>{option?.name}</h5></Link>
                </div>
        )}
    </div>
  )
}

export default Menu
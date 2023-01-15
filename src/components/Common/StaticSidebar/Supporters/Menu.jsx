import React, { useState } from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Menu = ({ option, currentState }) => {

    const [toogleOption, setToogleOption] = useState('')
    const [open, setOpen] = useState(false)

    const toogleHandler = ( option ) => {
        setToogleOption(option?.name)
        setOpen(!open)
    }
    
  return (
    <div className={`menu ${currentState ? 'active' : ''}`}>
        <Link to={option?.link} onClick={() => toogleHandler(option)}>
            <div>
                <MdAccountBalance id='icon'/>
                { !currentState && <h4>{option.name}</h4> }
                { option?.children?.length > 0 && !currentState && <BsFillArrowRightCircleFill id='drop_icon'/> }
            </div>
        { currentState && <span className='quick_name'>{option.name}</span>}
        </Link>
        {
            (toogleOption === option?.name) && open && !currentState && option?.children?.length > 0 && option?.children?.map((option, indx) =>  
                <div className="children" key={indx}>
                    <Link to={option?.link}><h5>{option?.name}</h5></Link>
                </div>
        )}
    </div>
  )
}

export default Menu
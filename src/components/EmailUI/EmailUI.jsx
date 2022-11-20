import React, { useEffect, useState } from 'react'
import MainBody from '../Common/Layout/MainBody/MainBody'
// import logo from '../../assets/Images/Admin/AdminLogo.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiError } from 'react-icons/bi'
import EMAIL_MOC_DATA from '../../MocData/EMAIL_MOC_DATA.JS'
// EMAIL_MOC_DATA

const EmailUI = () => {
    const [search, setSearch] = useState('')
    const [empty, setEmpty] = useState(false)
    const [filteredEmail, setFilteredEmail] = useState([])
    const [idx, setIndx] = useState(null)

    const toogle = (index) => {
        setIndx(index)
        // return null
    }

    useEffect(() => {
        const filter = EMAIL_MOC_DATA.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredEmail(filter)
        if(filter.length == 0) {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    },[search])

    const onChangeHandler = e => {
        setSearch(e.target.value)
    }
  return (
    <MainBody>
    <div className="email-main">
            <div className="inbox">
                    <div className="search">
                            <input type="text" name='search' value={search} onChange={onChangeHandler} placeholder='Search for Email' />
                    </div>
                    <div className="container">
                        {
                            filteredEmail?.map((data, indx) => 
                            <div key={indx} className={idx === indx ? 'active' : ''} onClick={() => toogle(indx)}>
                                    <div>
                                        <img src={data.image} />
                                        <div>
                                            <p>{data.name}</p>
                                            <span className={data.notification !== '' ? 'notify' : ''}>{data.message}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                       {data.notification !== '' ? <span>{data.notification}</span> : null}
                                            <BsThreeDotsVertical />
                                        </div>
                                    </div>
                            </div>)
                        }
                        { empty && <div className="no-record">
                                        <BiError id='no-record'/>
                                        <h2>No Record Found !</h2> 
                                    </div>}
                    </div>
            </div>
            <div className="detail empty">
                    <div>
                        <h1> welcome to your personalise inbox </h1>
                    </div>
            </div>
    </div>
    </MainBody>
  )
}

export default EmailUI
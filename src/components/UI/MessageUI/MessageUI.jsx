import React, { useEffect, useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import logo from '../../../assets/Images/Admin/AdminLogo.jpg'
import { BsFillCameraVideoFill, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import { BiError } from 'react-icons/bi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { TbPhoneCall } from 'react-icons/tb'
import EMAIL_MOC_DATA from '../../../MocData/EMAIL_MOC_DATA.JS'
// EMAIL_MOC_DATA

const MessageUI = () => {
    const [search, setSearch] = useState('')
    const [empty, setEmpty] = useState(false)
    const [welcomeScreen, setWelcomeScreen] = useState(true)
    const [filteredEmail, setFilteredEmail] = useState([])
    const [idx, setIndx] = useState(null)
    const [newArr, setNewArr] = useState([])
    const [message, setMessage] = useState('')
    const [newMessage, setNewMessage] = useState({})

    const toogle = (index) => {
        setIndx(index)
        setWelcomeScreen(false)
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

    const CHAT_DATA = [
        {message: 'Hello How Are You Hello How Are You Hello How Are You Hello How Are You Hello How Are You', sender: 'other'},
        {message: 'I am fine thank you', sender: 'you'},
        {message: 'I am fine thank you Hello How Are You Hello How Are You Hello How Are You Hello How Are You', sender: 'you'},
        {message: 'I am fine thank you', sender: 'you'},
        {message: 'Hello How Are You', sender: 'other'},
        {message: 'Hello How Are You', sender: 'other'},
        {message: 'Hello How Are You', sender: 'other'},
        {message: 'I am fine thank you', sender: 'you'},
        {message: 'Hello How Are You', sender: 'other'},
        {message: 'I am fine thank you', sender: 'you'},
        {message: 'Hello How Are You', sender: 'other'},
    ]

    const changeMessage = e => {
        setMessage(e.target.value)
    }
    
    useEffect(() => {
        setNewArr(CHAT_DATA)
    },[])

    useEffect(() => {
        if(newArr.length > 0){
            setNewArr([...newArr, newMessage])
        }
    },[newMessage])
    
    const sendMessage = () => {
        setNewMessage({message: message, sender: 'you'})
    }
    
    console.log(message);

  return (
    <MainBody>
        <div className="message-main">
                <div className="inbox">
                        <div className="search">
                                <input type="text" name='search' value={search} onChange={onChangeHandler} placeholder='Search for User' />
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
                <div className="detail">
                        { welcomeScreen && <div className='empty'>
                            <h1> Welcome to your personalise message box </h1>
                        </div> }
                        { !welcomeScreen && <div className="container">
                            <div className="header">
                                <div>
                                    <div>
                                        <img src={logo} alt="" />
                                        <div className="active"/>
                                    </div>
                                    <div>
                                        <p>Mohit Agarwal</p>
                                        <span>active now</span>
                                    </div>
                                </div>
                                <div>
                                    <BsTrash id='chat-icons'/>
                                    <BsFillCameraVideoFill id='chat-icons'/>
                                    <TbPhoneCall id='chat-icons'/>
                                </div>
                            </div>
                                <div className="chat-container">
                                    {
                                        newArr.map((chat, i) => 
                                        <div key={i} className={chat.sender === 'other' ? 'left' : 'right'}>
                                            <span>{chat.message}</span>
                                        </div>)
                                    }
                                </div>
                                <div className='send-input'>
                                        <input type="text" value={message} name='message' onChange={changeMessage}/>
                                        <RiSendPlaneFill id='send-icon' onClick={sendMessage}/>
                                </div>
                        </div> }
                </div>
        </div>
    </MainBody>
  )
}

export default MessageUI
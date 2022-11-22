import React from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import logo from '../../../assets/Images/Extra/shop-logo.png'
import { Link } from 'react-router-dom'
import { RiDraftLine } from 'react-icons/ri'
import { MdOutlineSell } from 'react-icons/md'

const AddNewItem = () => {
  return (
    <MainBody>
        <div className="add-new-item">
            <div className="head">
                <div>
                    <img src={ logo } alt="" />
                    <p>Adidas Premium</p>
                </div>
                <div>
                    <p>Since 2007</p>
                </div>
            </div>
            <div className="container">
                <div className="input-field-full">
                    <label htmlFor="">Item Name</label>
                    <input type="text" placeholder='Enter your Item Title'/>
                </div>
                <div className="input-field-half">
                    <div>
                        <label htmlFor="">Category</label>
                        <select name="" id=""></select>
                    </div>
                    <div>
                        <label htmlFor="">Sub Category</label>
                        <select name="" id=""></select>
                    </div>
                </div>
                <div className="input-field-full">
                    <label htmlFor="">Enter Description</label>
                    <textarea type="text" placeholder='Enter Item Description'/>
                </div>
                <footer>
                    <button><Link to='/items/listed-item'>Cancel</Link></button>
                    <button><Link><RiDraftLine id='btn-icon'/>Save to Draft</Link></button>
                    <button><Link><MdOutlineSell id='btn-icon'/>Sell</Link></button>
                </footer>
            </div>
        </div>
    </MainBody>
  )
}

export default AddNewItem
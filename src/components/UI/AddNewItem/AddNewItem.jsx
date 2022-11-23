import React, { useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import logo from '../../../assets/Images/Extra/shop-logo.png'
import { Link } from 'react-router-dom'
import { RiDraftLine } from 'react-icons/ri'
import { MdAddCircle, MdOutlineSell } from 'react-icons/md'

const AddNewItem = () => {
    const [addMoreOption, setAddMoreOption] = useState([
        { name: 'condition' }
    ])

    const addMoreRow = () => {
        setAddMoreOption([...addMoreOption, addMoreOption])
    }

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
                        <select name="" id="">
                            <option value="">Select Category</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Sub Category</label>
                        <select name="" id="">
                            <option value="">Select Sub Category</option>
                        </select>
                    </div>
                </div>
                <div className="input-field-full">
                    <label htmlFor="">Enter Description</label>
                    <textarea type="text" placeholder='Enter Item Description'/>
                </div>
                <div className="input-field-multi">
                    <div>
                        <label htmlFor="">SKU</label>
                        <input type="text" placeholder='Enter Custom SKU'/>
                    </div>
                    <div>
                        <label htmlFor="">Quantity</label>
                        <select name="" id="">
                            <option value="">Select Quentity</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Size</label>
                        <select name="" id="">
                            <option value="">Select Size</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Item Condition</label>
                        <select name="" id="">
                            <option value="">Select Item Condition</option>
                        </select>
                    </div>
                </div>
                <div className="input-field-multi">
                    <div>
                        <label htmlFor="">Color</label>
                        <select name="" id="">
                            <option value="">Select Color</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Delivery Time</label>
                        <select name="" id="">
                            <option value="">Select Delivery Time</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Delivery Charges</label>
                        <input type="text" placeholder='Enter Deliver Charges'/>
                    </div>
                    <div>
                        <label htmlFor="">Fast Delivery</label>
                        <select name="" id="">
                            <option value="">Select Delivery Option</option>
                        </select>
                    </div>
                </div>
                <div className="input-field-multi last">
                    <div>
                        <label htmlFor="">Free Delivery</label>
                        <select name="" id="">
                            <option value="">Select Delivery</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Delivery Partner</label>
                        <select name="" id="">
                            <option value="">Select Delivery Partner</option>
                        </select>
                    </div>
                </div>
                <div className="input-field-full add-more">
                    <label htmlFor="">Enter Condition<MdAddCircle id='add-more' onClick={ addMoreRow }/></label>                   
                        { addMoreOption.map( (dt, indx) =>  <div>
                            <input type="text" name={dt.name} placeholder={`Buying Condition Line ${indx+1}`}/></div> ) 
                        }
                    
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
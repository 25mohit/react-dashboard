import React, { useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { BsTrash } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import MessageCard from '../../Common/MessageCard/MessageCard'

const DraftUI = () => {
    
    const [deleteModal, setDeleteModal] = useState(false)

    const tableData = [
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
        {title:'Mens Shirt Cotton', size:['S','M','L','XL','XXL'], price: '$9.99', qty:'10'},
    ]

  return (
    <MainBody>
        <div className="draft-main">
            <div className="container">
                    <div className="table">
                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><p>No.</p></td>
                                    <td><p>Image</p></td>
                                    <td><p>Title</p></td>
                                    <td><p>Size</p></td>
                                    <td><p>Price</p></td>
                                    <td><p>Qty.</p></td>
                                    <td><p>Actions</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                { tableData.map((data, indx) => <tr key={indx}>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td><p>{indx+1}</p></td>
                                    <td><p></p></td>
                                    <td><p>{data.title}</p></td>
                                    <td><p>
                                        <select>
                                            {data.size.map(size => 
                                                <option value="">{size}</option>
                                            )}
                                        </select>
                                        </p></td>
                                    <td><p>{data.price}</p></td>
                                    <td><p>{data.qty} Items</p></td>
                                    <td>
                                        <AiFillEye id='table-action' className='show-icon'/>
                                        <BsTrash id='table-action' className='delete-icon' onClick={() => setDeleteModal(true)}/>
                                        <FaRegEdit id='table-action' className='edit-icon'/>
                                        
                                    </td>
                                </tr> )}
                            </tbody>
                        </table>
                        { deleteModal && <MessageCard type="delete" onCancel={() => setDeleteModal(false)}/> }
                    </div>
                </div>
            </div>
    </MainBody>
  )
}

export default DraftUI
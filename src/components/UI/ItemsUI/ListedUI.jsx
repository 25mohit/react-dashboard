import React, { useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { BsFillCartCheckFill, BsFillPatchPlusFill, BsTrash } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { FcMoneyTransfer, FcSearch } from 'react-icons/fc'
import MessageCard from '../../Common/MessageCard/MessageCard'
import { Link } from 'react-router-dom'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'

const ListedUI = () => {
    const [toogle, setToogle] = useState(1)
    const [deleteModal, setDeleteModal] = useState(false)

  return (
    <MainBody>
        <div className="listed-main">
            <div className="header">
                <div>
                    <h2>Total Items</h2>
                    <div>
                        <p>32</p>
                        <BsFillCartCheckFill id='card-icon'/>
                    </div>
                </div>
                <div>
                    <h2>Listing History</h2>
                    <div>
                        <p>Find</p>
                        <FcSearch id='card-icon'/>
                    </div>
                </div>
                <div>
                <h2>Invoice Till Now</h2>
                    <div>
                        <p>$ 905</p>
                        <FcMoneyTransfer id='card-icon-3'/>
                    </div>
                </div>
            </div>
            <div className="head">
                <div>
                    {/* <div className={toogle===1 ? 'active' : ''} onClick={() => setToogle(1)}><p>TODAY</p></div>
                    <div className={toogle===2 ? 'active' : ''} onClick={() => setToogle(2)}><p>YESTERDAY</p></div>
                    <div className={toogle===3 ? 'active' : ''} onClick={() => setToogle(3)}><p>LAST 7 DAYS</p></div>
                    <div className={toogle===4 ? 'active' : ''} onClick={() => setToogle(4)}><p>LAST 30 DAYS</p></div> */}
                </div>
                <div>
                        <button><Link to='/add-new-item'><BsFillPatchPlusFill id='btn-icon'/>Add New Item</Link></button>
                </div>
            </div>
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
                            { ITEMS_LIST_DATA.map((data, indx) => <tr key={indx}>
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

export default ListedUI
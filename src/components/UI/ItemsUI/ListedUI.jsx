import React, { useEffect, useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { BsFillCartCheckFill, BsFillPatchPlusFill, BsTrash } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { FcMoneyTransfer, FcSearch } from 'react-icons/fc'
import MessageCard from '../../Common/MessageCard/MessageCard'
import { Link } from 'react-router-dom'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'

const ListedUI = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [search, setSearch] = useState('')
    const [empty, setEmpty] = useState(false)
    const [catType, setCatType] = useState(null)
    const [currentCategory, setCurrentCategory] = useState('')
    const [searchFiltered, setSearchFiltered] = useState([])
    const [categoryFilter, setCategoryFilter] = useState([])
    
    const category = currentCategory

    useEffect(() => {
        const filtered = categoryFilter?.filter(dt => dt.title.toLowerCase().includes(search.toLowerCase()))
        setSearchFiltered(filtered)
        if(filtered.length ===0){
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    },[search, categoryFilter])

    const uniqueCategory = [...new Set(ITEMS_LIST_DATA?.map(category => category.category))]

    const getCategory = (category) => {
        if(category==='cloths'){
            return 'Cloths'
        } else if(category==='electronics'){
            return 'Electronics'
        } else if(category==="health_products"){
            return 'Health Products'
        } else if(category==='beauty_products'){
            return 'Beauty Products'
        } else if(category==='medicle'){
            return 'Medicles'
        } else if(category==='applience'){
            return 'Home Appliences'
        }
    }

    const getCategoryType = (index, category) => {
        setCatType(index)
        setCurrentCategory(category)
    }

    const showAll = () => {
        setCurrentCategory('')
        setCatType(null)
    }

    useEffect(() => {
        const catFilter = ITEMS_LIST_DATA?.filter(data => data.category === category)
        setCategoryFilter(catFilter)
        if(category===''){
            setCategoryFilter(ITEMS_LIST_DATA)
        }
    },[category])
    
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
                <div className="categories-bar">
                    <div>
                        <span className={`${ catType == null ? 'active' : ''} toogle`} onClick={showAll}>All { catType == null && searchFiltered.length }</span>
                        { uniqueCategory?.map( (category, indx) => <span key={indx} className={`${indx === catType ? 'active' : ''} toogle`} onClick={() => getCategoryType(indx, category)}>{getCategory(category)} {indx===catType && searchFiltered?.length}</span> )}
                    </div>
                    <div>
                        <div className="shadow-div" />
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Enter something to Search !'/>
                    </div>
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
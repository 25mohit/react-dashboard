import React, { useEffect, useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { BsFillStopwatchFill, BsTrash } from 'react-icons/bs'
import { AiFillCaretRight, AiFillEye } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import MessageCard from '../../Common/MessageCard/MessageCard'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'

const UnsoldUI = () => {
    
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
        }  else if(category==='medicle'){
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
        <div className="draft-main">
            <div className="head">
                <h2>Unsold Items</h2>
                <div className="categories-bar">
                    <div>
                        <span className={`${ catType == null ? 'active' : ''} toogle`} onClick={showAll}>All { catType == null && searchFiltered.length }</span>
                        { uniqueCategory?.map( (category, indx) => <span key={indx} className={`${indx === catType ? 'active' : ''} toogle`} onClick={() => getCategoryType(indx, category)}>{getCategory(category)} {indx===catType && searchFiltered?.length}</span> )}
                    </div>
                    <div>
                        <div className="shadow-div" ><span><AiFillCaretRight /></span></div>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Enter something to Search !'/>
                    </div>
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
                                { searchFiltered.map((data, indx) => <tr key={indx}>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td><p>{indx+1}</p></td>
                                    <td><p></p></td>
                                    <td><p>{data.title}</p></td>
                                    <td><p>
                                        <select>
                                            {data.size.map(size => 
                                                <option value="">{size}</option>)}
                                        </select>
                                        </p></td>
                                    <td><p>{data.price}</p></td>
                                    <td><p>{data.qty} Items</p></td>
                                    <td>
                                        <AiFillEye id='table-action' className='show-icon'/>
                                        <BsTrash id='table-action' className='delete-icon' onClick={() => setDeleteModal(true)}/>
                                        {/* <Link to='/add-new-item'><FaRegEdit id='table-action' className='edit-icon'/></Link> */}
                                        <BsFillStopwatchFill id='table-action' className='time-icon'/>
                                        <MdOutlineSell id='table-action' className='sell-icon'/>
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

export default UnsoldUI
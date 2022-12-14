import { useEffect, useState } from 'react'
import { BsInfoSquareFill, BsThreeDots } from 'react-icons/bs'
import { FiDollarSign } from 'react-icons/fi'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'
import { AiFillCaretRight } from 'react-icons/ai'

const OrdersUI = () => {
    const [search, setSearch] = useState('')
    const [empty, setEmpty] = useState(false)
    const [catType, setCatType] = useState(null)
    const [currentCategory, setCurrentCategory] = useState('')
    const [searchFiltered, setSearchFiltered] = useState([])
    const [categoryFilter, setCategoryFilter] = useState([])
    
    const category = currentCategory

    const paymentType = (type) => {
        if(type==='cash'){
            return 'Cash'
        } else if(type==='online'){
            return 'Online Banking'
        } else if (type==='credit_card'){
            return 'Credit Card'
        } else if (type==='UPI'){
            return 'UPI'
        }
    }

    const getPaymentColor = (type) => {
        if(type==='cash'){
            return 'rgb(254, 26, 26)'
        } else if(type==='online'){
            return 'rgb(66, 120, 255)'
        } else if (type==='credit_card'){
            return 'rgb(255, 173, 66)'
        } else if (type==='UPI'){
            return 'rgb(28, 165, 0)'
        }
    }

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
        <div className="orders-main">
            {/* <div className="head">
                <div>
                    <h2>Order Details&nbsp;&nbsp;<BsInfoSquareFill /></h2>
                    <BsThreeDots />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur quam adipisci libero sed! Tempora odit quam similique consectetur reiciendis alias! Accusamus, sunt alias. Temporibus suscipit deleniti amet repellat dignissimos?
                    Accusamus odit, necessitatibus placeat dignissimos voluptatum, sapiente laborum quas.</p>
                </div>
            </div> */}
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
            <div className="container">
                { empty && <div className='empty-order'><h1>Sorry ! we coudn't find anything releated to </h1><p>{search}</p></div>}
                { !empty && <div className="table">
                    <table cellSpacing='0'>
                        <thead>
                            <tr>
                                {/* <td><input type="checkbox" /></td> */}
                                <td><p>No.</p></td>
                                <td><p>Image</p></td>
                                <td><p>Title</p></td>
                                <td><p>Size</p></td>
                                <td><p>Price</p></td>
                                <td><p>Qty.</p></td>
                                <td><p>Actions</p></td>
                                <td><p>Payment <FiDollarSign style={{color:'rgba(240, 62, 55,0.8)'}}/></p></td>
                            </tr>
                        </thead>
                        <tbody>
                            { searchFiltered.map((data, indx) => <tr key={indx}>
                                {/* <td><input type="checkbox" name="" id="" /></td> */}
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
                                <td></td>
                                <td><p style={
                                    {backgroundColor:getPaymentColor(data.payment),
                                    padding:'0.3rem 0.6rem', color: 'white', borderRadius: '8px', fontSize: '0.9rem'}
                                    } className='payment-color'>{paymentType(data.payment)}</p></td>
                            </tr> )}
                        </tbody>
                    </table>
                </div> }
            </div>
        </div>
    </MainBody>
  )
}

export default OrdersUI
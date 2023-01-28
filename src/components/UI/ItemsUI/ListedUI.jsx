import React, { useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { BsFillCartCheckFill, BsFillPatchPlusFill } from 'react-icons/bs'
import { FcMoneyTransfer, FcSearch } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'
import CategoriesBar from '../../Common/CategoriesBar/CategoriesBar'
import Table from '../../Common/Table/Table'

const ListedUI = () => {
    const [empty, setEmpty] = useState(false)
    const [searchFiltered, setSearchFiltered] = useState([])
    
    const columnData = [
        { headingTitle: 'No.', headingValue: 'no' },
        { headingTitle: 'Image', headingValue: 'no' },
        { headingTitle: 'Title', headingValue: 'no' },
        { headingTitle: 'Size', headingValue: 'no' },
        { headingTitle: 'Price', headingValue: 'no' },
        { headingTitle: 'Qty.', headingValue: 'no' },
        { headingTitle: 'Actions', headingValue: 'no' },
    ]
  return (
    <MainBody>
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
            <div className="listed_items_head">
                <CategoriesBar allData={ITEMS_LIST_DATA} returnData={setSearchFiltered} isEmpty={setEmpty}/>
                <Link to='/add-new-item'>
                    <button><BsFillPatchPlusFill id='btn-icon'/>Add&nbsp;New&nbsp;Item</button>
                </Link>
            </div>
            <Table tableData={searchFiltered} columnData={columnData}/>
    </MainBody>
  )
}

export default ListedUI
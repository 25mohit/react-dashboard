import { useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'
import Table from '../../Common/Table/Table'
import CategoriesBar from '../../Common/CategoriesBar/CategoriesBar'

const OrdersUI = () => {
    const [empty, setEmpty] = useState(false)
    const [searchFiltered, setSearchFiltered] = useState([])

    const columnData = [
        { headingTitle: 'No.', headingValue: 'no' },
        { headingTitle: 'Image', headingValue: 'no' },
        { headingTitle: 'Size', headingValue: 'no' },
        { headingTitle: 'Price', headingValue: 'no' },
        { headingTitle: 'Qty.', headingValue: 'no' },
        { headingTitle: 'Actions', headingValue: 'no' },
        { headingTitle: 'Payments $', headingValue: 'no' },
    ]

  return (
    <MainBody>
        <CategoriesBar allData={ITEMS_LIST_DATA} returnData={setSearchFiltered} isEmpty={setEmpty} />
        { empty && <div className='empty-order'><h1>Sorry ! we coudn't find anything releated to </h1></div>}
        <Table tableData={searchFiltered} columnData={columnData}/>
    </MainBody>
  )
}

export default OrdersUI
import { useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'
import CategoriesBar from '../../Common/CategoriesBar/CategoriesBar'
import Table from '../../Common/Table/Table'

const DraftUI = () => {
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
        <h2 className='container_main_heading'>Saved Items</h2>
        <CategoriesBar allData={ITEMS_LIST_DATA} returnData={setSearchFiltered} isEmpty={setEmpty}/>
        <Table tableData={searchFiltered} columnData={columnData}/>
    </MainBody>
  )
}

export default DraftUI
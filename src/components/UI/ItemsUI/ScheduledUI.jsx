import React, { useEffect, useState } from 'react'
import MainBody from '../../Common/Layout/MainBody/MainBody'
import { BsFillStopwatchFill, BsTrash } from 'react-icons/bs'
import { AiFillCaretRight, AiFillEye } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import MessageCard from '../../Common/MessageCard/MessageCard'
import { Link } from 'react-router-dom'
import ITEMS_LIST_DATA from '../../../MocData/ORDERS_MOC_DATA'
import SCHEDULED_ITEMS from '../../../MocData/SCHEDULED_ITEMS'
import CategoriesBar from '../../Common/CategoriesBar/CategoriesBar'
import Table from '../../Common/Table/Table'

const ScheduledUI = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [searchFiltered, setSearchFiltered] = useState([])

    const columnData = [
        { headingTitle: 'No.', headingValue: 'no' },
        { headingTitle: 'Image', headingValue: 'no' },
        { headingTitle: 'Title', headingValue: 'no' },
        { headingTitle: 'Size', headingValue: 'no' },
        { headingTitle: 'Price.', headingValue: 'no' },
        { headingTitle: 'Quantity', headingValue: 'no' },
        { headingTitle: 'Actions', headingValue: 'no' },
    ]

  return (
    <MainBody>
        <h2 className='container_main_heading'>Scheduled Items</h2>
        <CategoriesBar returnData={setSearchFiltered} allData={SCHEDULED_ITEMS} isEmpty={setEmpty}/>
        <Table tableData={searchFiltered} columnData={columnData}/>
        { deleteModal && <MessageCard type="delete" onCancel={() => setDeleteModal(false)}/> }
    </MainBody>
  )
}

export default ScheduledUI
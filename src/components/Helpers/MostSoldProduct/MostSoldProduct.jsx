import React from 'react'
import { BsListNested } from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai'
import MOST_SELLING_PRODUCT from '../../../MocData/MOST_SELLING_PRODUCT'

const MostSoldProduct = () => {
  return (
    <div className='most-sold'>
      <div>
        <h3>Most Selling</h3>
        <p><BsListNested /></p>
      </div>
      <div>
        {
          MOST_SELLING_PRODUCT?.map(data => 
          <div className='sold-item-card'>
              <div>
                  <img src={data.image} alt="" />
                  <div>
                    <p>{data.productName}</p>
                    <p>{data.price} <span>{data.date}</span></p>
                  </div>
              </div>
              <div>
                <AiFillCaretRight />
              </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default MostSoldProduct
const Table = ({ tableData, columnData }) => {
    
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

    console.log("columnData", columnData);

  return (
    <div className="table">
        <table cellSpacing='0'>
            <thead>
                <tr>
                {
                    columnData?.map((column, indx) => 
                        <td key={indx}><span>{column?.headingTitle}</span></td>
                    )
                }
                </tr>
            </thead>
            <tbody>
                { tableData.map((data, indx) => <tr key={indx}>
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
                    <td><p style={
                        {backgroundColor:getPaymentColor(data.payment),
                        padding:'0.3rem 0.6rem', color: 'white', borderRadius: '8px', fontSize: '0.9rem'}
                        } className='payment-color'>{paymentType(data.payment)}</p></td>
                </tr> )}
            </tbody>
        </table>
    </div>
  )
}

export default Table
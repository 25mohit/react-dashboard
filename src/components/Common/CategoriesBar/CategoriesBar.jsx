import { useEffect, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

const CategoriesBar = ({ allData, returnData, isEmpty }) => {
    
    const [catType, setCatType] = useState(null)
    const [searchFiltered, setSearchFiltered] = useState([])

    const [search, setSearch] = useState('')
    const [categoryFilter, setCategoryFilter] = useState([])
    const [currentCategory, setCurrentCategory] = useState('')
    
    useEffect(() => {
        const filtered = categoryFilter?.filter(dt => dt.title.toLowerCase().includes(search.toLowerCase()))
        setSearchFiltered(filtered)
    },[search, categoryFilter])

    useEffect(() => {
        const catFilter = allData?.filter(data => data.category === currentCategory)
        setCategoryFilter(catFilter)
        if(currentCategory===''){
            setCategoryFilter(allData)
        }
    },[currentCategory])
    
    useEffect(() => {
        const filtered = categoryFilter?.filter(dt => dt.title.toLowerCase().includes(search.toLowerCase()))
        returnData(filtered)
        if(isEmpty !== undefined){
            if(filtered.length ===0){
                isEmpty(true)
            } else {
                isEmpty(false)
            } 
        }
    },[search, categoryFilter])

    const showAll = () => {
        setCurrentCategory('')
        setCatType(null)
    }

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

    const uniqueCategory = [...new Set(allData?.map(category => category.category))]

    const getCategoryType = (index, category) => {
        setCatType(index)
        setCurrentCategory(category)
    }

  return (
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
  )
}

export default CategoriesBar
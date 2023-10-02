import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import addicon from '../icons/plus.png'
import ItemList from './ItemList'

const Body = () => {

    let [items, setItems] = useState([])

    useEffect(()=>{
        getItems()
    },[])

    let getItems = async (e) => {
        let response = await fetch('/api/items')
        let data = await response.json()
        console.log(data)
        setItems(data)
      }
    

  return (
    <div className='body'>
        <div className='add-item-icon'>
            <Link to='/add-item/'><img src={addicon} alt={addicon}/></Link>
        </div>
        <div>
        {items.map((item, index)=> 
            <ItemList item={item} key={index}/>
            
        )}
        </div> 
    </div>
  )
}

export default Body

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import edit from '../icons/pen.png'
import trash from '../icons/trash.png'

const ItemList = ({item}) => {

  let [dlt, setDlt] = useState([])

  let navigate = useNavigate()
  
  let itemViewHandler =() => {
    navigate(`/item/${item.id}`)
  }

  let updateHandle = async() => {    
    navigate(`/update/${item.id}`)
  }
  
  let deleteHandle = async() => {    
    let response = await fetch(`/api/delete/${item.id}/`,{
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json"
      }
    })
    let data = await response.json()
    setDlt(data)
    window.location.reload(false)
  }

  return (
    <div className='item-list'>
        <div className='item-table'>
          {dlt}
          <div className='item-data'>
            <div className='item-row'>
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <p onClick={updateHandle}><img src={edit} alt={edit} /></p>
              <p onClick={deleteHandle}><img src={trash} alt={trash} /></p>
              <p onClick={itemViewHandler}>View</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemList
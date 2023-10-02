import React from 'react'
import { useNavigate } from 'react-router-dom'
import edit from '../icons/pen.png'
import trash from '../icons/trash.png'

const ItemList = ({item}) => {

  let navigate = useNavigate()

  
  let itemViewHandler =() => {
    navigate(`/item/${item.id}`)
  }
  return (
    <div className='item-list'>
        <div className='item-table'>
          <div className='item-data'>
            <div className='item-row'>
              <p>{item.name}</p>
              <p>{item.updated}</p>
              <p><img src={edit} alt={edit} /></p>
              <p><img src={trash} alt={trash} /></p>
              <p onClick={itemViewHandler}>View</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemList
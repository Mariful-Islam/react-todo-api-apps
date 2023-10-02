import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemView = () => {
  
  let params = useParams()

  let [item, setItem] = useState([])

  useEffect(()=>{
    getItem()
  }, [])

  let getItem = async () => {
    let response = await fetch(`/api/item/${params.id}/`)
    let data = await response.json()
    console.log(data)

    setItem(data)


  }

  return (
    <div>
        {item.name} <br />
        {item.desc} <br />
        {item.created}
    </div>
  )
}

export default ItemView
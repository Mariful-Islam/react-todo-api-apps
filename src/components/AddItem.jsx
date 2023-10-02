import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {

  let [itemData, setItemData] = useState()

  let navigate = useNavigate()

  let addItemHandler= async(e)=>{
    e.preventDefault()
    let response = await fetch("/api/create/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:e.target.name.value, desc: e.target.desc.value})
    })
    let data = await response.json()

    console.log(response)
    console.log(data)
    setItemData(data) 
    navigate('/')
  }
  return (
    <div className='add-item'>
      <form onSubmit={addItemHandler} method='POST'>
        <input type='text' name='name' placeholder='name' /> <br />
        <textarea name='desc' placeholder='Description'></textarea> <br />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default AddItem
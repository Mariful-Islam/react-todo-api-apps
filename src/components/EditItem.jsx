import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditItem = () => {

    let params = useParams()

    let navigate = useNavigate()

    let [item, setItem] = useState([])

    let updateFormHandler = async(e) =>{
        e.preventDefault()
        let response = await fetch(`/api/update/${params.id}/`,{
            method: "PUT", 
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: e.target.name.value, desc: e.target.desc.value})
          })
          let data = await response.json()
          console.log(data)
          navigate('/')   
    }

    useEffect(()=>{
      getUpdateItem()
    }, [])

    let changeHandle = (e) => {
      setItem(e.target.value)
    }

    let getUpdateItem = async() =>{
        let response = await fetch(`/api/update/${params.id}/`)
          let data = await response.json()
          console.log(data)
          setItem(data)
    }



  return (
    <div>
        <form onSubmit={updateFormHandler} method='PUT'>
            <input type='text' name='name' value={item.name} onChange={changeHandle} placeholder='name' />
            <input type='text' name='desc' value={item.desc} onChange={changeHandle} placeholder='Description' />
            <input type='submit'/>
        </form>
    </div>
  )
}

export default EditItem
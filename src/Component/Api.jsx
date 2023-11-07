import React, { useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [data, setData] = useState([])
    const url = 'https://api.github.com/users'
    const fetchData = ()=>{
        axios.get(url).then((res)=>{
            console.log(res);
        })
    }
  return (
    <>
    <button onClick={fetchData}>FETCH</button>
    </>
  )
}

export default Api
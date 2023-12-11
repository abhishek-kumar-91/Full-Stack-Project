import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/home")
    .then(data=>{
      setData(data.data)
    })
    .catch(err=>console.log(err));
  },[])
  return (
    <div>
  {
    data.map(data=>{
      return (<li>{data.firstName} - {data.lastName} - {data.email} - {data.phoneNo}</li>

       )
    })
  }

      {console.log(data)}
    </div>
  )
}

export default Home
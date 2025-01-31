import axios from "axios";
import React, {useEffect, useState } from "react"

const Axiosapi = () =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setData(response.data);
            setLoading(false)
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false);
        })
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error {error}</p>
    }

    return(
        <div>
            <p>Data</p>
            <ul>
            {data.map((item)=>(
                <li key={item.id}>
                    <p>{item.title}</p>: {item.body}
                </li>
            ))}
            </ul>
        </div>
    )
}
export default Axiosapi;

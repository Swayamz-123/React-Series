import { useEffect,useState } from "react";
function useCurrency(currency){
    const [data,setData]= useState({})
    useEffect(()=>{
       fetch()
       .then((res)=> res.json())
       .then((res)=>setData(res[currency]));
       console.log(data);
       
    },[currency])
    console.log(data);
    return data
}

export default useCurrency;  // pura ka pura method hi return kar rha
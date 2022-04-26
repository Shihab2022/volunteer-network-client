import { useEffect, useState } from "react"

const useVolunteerData=()=>{

const [volData,setVolData]=useState([])
useEffect(()=>{

    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setVolData(data))
},[])

return [volData,setVolData]
}

export default useVolunteerData
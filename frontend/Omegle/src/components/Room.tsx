import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    //Logic to inti user to room
    useEffect(() => {
        //Logic
    },[])
  return (
    <div>
        Hi {name}
      
    </div>
  )
}

export default Room

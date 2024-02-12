import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
    const [name ,setName] = useState("");
    let navigate = useNavigate()
  return (
   <>
   <div>
    <input type='text' onChange={(e) => setName(e.target.value)} />
    <Link to={`/room/?name=${name}`} >Join</Link>
   </div>
   </>
  )
}

export default Landing

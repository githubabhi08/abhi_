import React, { useContext } from 'react'
import {magic} from './App'
function Abhi() {
  const{score,setscore,data,setdata}=useContext(magic)
  return (
    <>
    
    
    <button className='btn btn-primary' onClick={()=>{setdata('abhi')}}>START</button>
    
    
    
    
    
    </>
  )
}

export default Abhi
/*
----useState, Components---
import React from 'react';
const header = (props) =>{
    console.log(props)
  return(
    <>
    <div className='h-8 font-bold px-3 bg-green-500 flex items-center justify-between'>Header
    <h2>{props.user}</h2>
    <div className='flex gap-8'>
        
        <h4>About</h4>
        <h4>Career</h4>
        <h4>{props.edit}</h4>
        <h4>Contact Us</h4>
    </div>
    </div>
  </>
  )
}
export default header
*/

/*----Routing---
import React from 'react';
import Link from 'next/link';
const header = () =>{
  return(
    <>
    <div className='h-8 font-bold px-3 bg-green-500 flex items-center justify-between'>Header
    <div className='flex gap-8'>
        <Link href = "/About">About</Link>
        <Link href = "/Courses">Courses</Link>
        <Link href = "/Products">Products</Link>
        
    </div>
    </div>
  </>
  )
}
export default header
*/

/*--------useState, Components---
"use client"
import React, {useState} from 'react';
import Header from "@/Components/Header"
const page = () =>{
  const [user, setUser] = useState("Gaurav")
  const [editor, setEditor] = useState("Roshan")

  return(
    <>
    <Header user = {user} edit = {editor}/>
    {user}
    </>
  )
  
}
export default page
*/

/*----Routing---
"use client"
import React from 'react';
const page = () =>{
  return(
    <>
    <div> 
         
        <h3>This is Home Page</h3>
        
    </div>
  </>
  )
}
export default page
*/

// -----Axios => API Calling
"use client"
import React, {useEffect, useState } from 'react';
import axios from 'axios';

const page = () =>{
  const [images, setImages] = useState([])
  useEffect(()=>{
    getImages()
  },[]) 
  const getImages = async ()=>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImages(data)
      console.log(images)
  } catch (error) {
    console.error("Error Fetching")
  }
}
  return(
    <>
    <button onClick = {getImages}className='px-2 py-3 bg-red-600 font-bold rounded-2xl text-white'>Get Images</button>
    <div className='p-10'>
      {images.map((elem,i)=>{
        return <img key = {i}
        src={elem.download_url}
        width={300}
        height={300}
        className='m-10 rounded-xl inline-block'
        />

      })}
    </div>
  </>
  )
}
export default page
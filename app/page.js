import React from 'react';
const page = () =>{
  // return "Hello"
  // const a =10
  // const groom = "Gaurav"
  // const bride = "Arunima"
  let marks= 90
  let total = 100
  return (
    // <div>{groom} weds {bride}</div>
     <>  
    {/* /*<></>=Fragments tag - empty tag */}
    <h1 className='font-bold  text-xl text-white bg-black'>My total marks was {marks} out of {total}</h1>
    </>
  )
  
}
export default page

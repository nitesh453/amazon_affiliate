import React from 'react'

const page = async ({params}) => {
    const item = await params
    console.log(item);
    
  return (
    <div>the item is </div>
  )
}

export default page
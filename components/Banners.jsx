import React from 'react'

const Banners = ({url ,link}) => {
  return (
    <div className='p-2 shadow-sm'>
        <a href={link} target='_blank'>
       <img src={`${url}`} 
       className='w-[100%] max-w-[20rem] md:max-w-[30rem]' alt="" /> 

        </a>
    </div>
  )
}

export default Banners
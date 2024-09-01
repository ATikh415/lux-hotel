import { FaStar } from "react-icons/fa6";

import React from 'react'

const Favorite = () => {
  return (
    <div className=' flex items-center gap-3 '>
        <FaStar className=' w-6 h-6  text-primary   '  />
        <FaStar className=' w-6 h-6  text-primary   '  />
        <FaStar className=' w-6 h-6  text-primary   '  />
        <FaStar className=' w-6 h-6  text-primary   '  />
        <FaStar className=' w-6 h-6  text-primary   '  />

    </div>
  )
}

export default Favorite
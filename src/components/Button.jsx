import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Button = () => {
    return (
        <>
            <button className='flex items-center gap-2 rounded-full bg-[#E78E93] italic text-white lg:ml-[300px] mr-20 py-2 px-4 md:ml-[200px] xs:ml-[60px]'>
                ver tudo<BsArrowRight />
            </button>
        </>
    )
}

export default Button
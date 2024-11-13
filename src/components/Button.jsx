import React from 'react'

function Button(
    {
    label,
    handleClick,
    className='',
    ...props
    }
) {
    return (
        <button onClick={handleClick} className={`px-20 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500 ${className}`}>{label}</button>
    )
}

export default Button
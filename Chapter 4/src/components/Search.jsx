import React from 'react'

const Search = () => {
  return (
    <div className='flex h-12 justify-between items-center m-2 rounded border border-yellow-500   w-60'>
        <input  className='w-28 h-10 outline-none border-none p-4 ' type="text"  placeholder='Search...'/>
        <button className='w-14 rounded h-12 bg-yellow-500 text-white font-semibold '>Search</button>
      
    </div>
  )
}

export default Search

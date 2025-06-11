import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-transparent flex px-5 h-15 justify-between items-center text-white'>
        <div className='logo text-3xl font-bold flex items-center'>
          <span className='text-white'>Pass</span>
          <span className='text-purple-500'>Man</span>
        </div>
        <ul>
            <li className='flex text-xl gap-5'>
                <a href="/">Home</a>
                <a href="">About</a>
                <a href="">Contact us</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
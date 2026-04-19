import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-transparent flex px-5 md:px-10 h-16 justify-between items-center text-white relative z-50'>
      <div className='logo text-2xl md:text-3xl font-bold flex items-center'>
        <span className='text-white'>Pass</span>
        <span className='text-purple-500'>Man</span>
      </div>

      {/* Hamburger Icon for Mobile/Tablet */}
      <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </div>

      {/* Navigation Links */}
      <ul className={`${isOpen ? "max-h-96 opacity-100 py-5" : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"} overflow-hidden flex-col md:flex md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent transition-all duration-500 ease-in-out items-center md:items-start border-b border-purple-500/20 md:border-none shadow-lg md:shadow-none`}>
        <li className='flex flex-col md:flex-row text-xl gap-5 w-full md:w-auto items-center'>
          <a className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-300 px-2' href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-300 px-2' href="#" onClick={() => setIsOpen(false)}>About</a>
          <a className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-300 px-2' href="#" onClick={() => setIsOpen(false)}>Contact us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
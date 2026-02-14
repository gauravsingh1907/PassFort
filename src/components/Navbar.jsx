import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">
        
  
        <div className="logo text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent cursor-pointer">
          PassFort
        </div>


        <ul className="flex gap-8 text-gray-300 font-medium">
          <li>
            <a className="hover:text-violet-400 transition duration-300" href="/">Home</a>
          </li>
          <li>
            <a className="hover:text-violet-400 transition duration-300" href="#">About</a>
          </li>
          <li>
            <a className="hover:text-violet-400 transition duration-300" href="#">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

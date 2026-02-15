import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">


        <div className="logo text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent cursor-pointer">
          PassFort
        </div>

        
        <button className="relative flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] hover:scale-105 active:scale-95">
          <FaGithub size={18} />
          GitHub
        </button>

      </div>
    </nav>
  )
}

export default Navbar

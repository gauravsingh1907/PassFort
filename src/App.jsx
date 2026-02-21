import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0d0b1a] to-[#1a0033] flex flex-col">

      {/* Ambient Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent_40%)] pointer-events-none"></div>

      <Navbar />

      <div className="flex-grow relative z-10">
        <Manager />
      </div>

      <Footer />
    </div>
  );
}


export default App

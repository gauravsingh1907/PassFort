import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Manager />
      </div>
      
      <Footer />
    </div>
  )
}


export default App

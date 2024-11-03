import './nav.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div className='max-h-screen'>
      <header>
        <Navbar />
      </header>
      <div className=" bgbackimg flex flex-col items-center justify-center text-center text-white h-screen">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">NEXUS CLUB</h1>
        <h2 className="text-2xl font-semibold mb-2">"Unlocking Tomorrow's Technology Today!"</h2>
        <p className="text-lg max-w-md mb-8">
          Charting the Course of Innovation: Spearheading Revolutionary Advancements and Transformations in the Dynamic Landscape of Technology and Engineering
        </p>
        <div className="flex gap-4">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">Projects</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">Events</button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

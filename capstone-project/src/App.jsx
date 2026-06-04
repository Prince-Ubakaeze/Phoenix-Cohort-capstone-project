import './index.css'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx'
import Planetarydata from './components/Planetarydata.jsx'
import Planets from './components/Planets.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Planetarydata />
      <Planets />
    </>
  )
}

export default App

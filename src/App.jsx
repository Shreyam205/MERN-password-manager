import './App.css'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <Navbar/>
      <Manager/>
    </div>
    </>
  )
}

export default App

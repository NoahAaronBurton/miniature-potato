import Nav from './components/Nav'
import './App.css'

function App() {

  return (
  <div className='flex flex-col h-screen flex-wrap pt-5'>
     <div className='container'>
            <h1 className='text-6xl text-balance font-bold'>Brendon Nielson</h1>
            <h2 className='text-4xl text-balance font-bold'>Commerical Audio Specialist</h2>
            <Nav />
        </div>
  </div>
  )
}

export default App

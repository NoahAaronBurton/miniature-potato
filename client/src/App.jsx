import Nav from './components/Nav'
import Section from './components/Section'
import './App.css'

function App() {

  return (
  <div className='flex flex-col h-screen flex-wrap pt-5'>
     <div className='container'>
            <h1 className='text-6xl text-balance font-bold'>Brendon Nielson</h1>
            <h2 className='text-4xl text-balance font-bold'>Commerical Audio Specialist</h2>
            <Nav />
            <div className='w-full h-6 bg-green-600'>
              <p className='text-center'>Book Me</p>
            </div>
        </div>
      
      <Section title='About Me'/>
      <Section title='My Music'/>
      <Section title='My Work'/>
      <Section title='Services'/>
  </div>
  )
}

export default App

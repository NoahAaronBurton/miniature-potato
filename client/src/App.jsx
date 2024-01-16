import Nav from './components/Nav'
import Section from './components/Section'
import profilePic from './assets/profile-pic.png'

import './App.css'

function App() {

  const AboutMe = () => {
    return (
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <p className='break-normal'>I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills.</p>
        </div>
        <div className='flex flex-row'>
          {/* <img className='h-48 w-48' src={profilePic} alt="" /> */}
        </div>
      </div>
    )
  }

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
      
      <Section title='About Me'>
        <AboutMe />
      </Section>
      <Section title='My Music'/>
      <Section title='My Work'/>
      <Section title='Services'/>
  </div>
  )
}

export default App

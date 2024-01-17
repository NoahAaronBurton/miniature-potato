import Nav from './components/Nav'
import Section from './components/Section'
import Music from './components/Music'
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
  <div className='flex flex-col min-h-screen flex-wrap pt-5 w-full'>
     <div className='container w-full'>
            <h1 className='text-6xl text-balance font-bold'>Brendon Nielson</h1>
            <h2 className='text-4xl text-balance font-bold'>Commerical Audio Specialist</h2>
      </div>
      <div className='w-full h-6 bg-gradient-to-r from-green-600 to-green-300'>
        <div className='text-center w-full'>Book Me</div>
      </div>
      
      <Section title='About Me'>
        <AboutMe />
      </Section>

      <Section title='My Music'>
        <Music />
      </Section>
      
      <Section title='My Work'/>
      <Section title='Services'/>
  </div>
  )
}

export default App

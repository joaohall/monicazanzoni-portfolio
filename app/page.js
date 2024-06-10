'use client'

import MovingText from './page/movingtext'
import Welcome from './page/welcome'
import AboutMe from './page/aboutme';
import Projects from './page/projects';

export default function Home(){
  return(
    <main className=''>
      <Welcome/>
      <AboutMe/>
      <Projects/>
      <MovingText/>
    </main>
  )
}
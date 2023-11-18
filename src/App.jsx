import { useState } from 'react'
import { Button, FooterComponent } from 'flowbite-react'
import Navbarcomponent from './components/header/Navbarcomponent';
import Footercomponent from './components/footer/Footercomponent';

function App() {

  return (
    <>
      <header>
          <Navbarcomponent/>
      </header>
      <main className='bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex justify-center items-center'>
          <Button className="" outline gradientDuoTone="greenToBlue" >Cyan to Blue</Button>
      </main>
      <footer>
        <Footercomponent/>
      </footer>
    </>
  )
}

export default App

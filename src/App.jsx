import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Menubar from './Menubar'
import Inbox from './inbox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-[100vh] w-[100vw] bg-orange-00 flex' >
      
    <Sidebar/>
    <Menubar/>
    <Inbox/>

      </div>
    </>
  )
}

export default App

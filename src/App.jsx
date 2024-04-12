import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <h1 className="content-center text-black px-3 text-xl">Background Color Change Project</h1>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-2 rounded-3xl">
            <button className="outline-dotted px-3 bg-red-400 rounded-2xl"
            onClick={()=>{setColor("red")}}>Red
            </button>

            <button className="outline-dotted px-3 bg-green-400 rounded-2xl" 
            onClick={()=>{setColor("green")}}>green
            </button>

            <button className="outline-dotted px-3 bg-blue-400 rounded-2xl" 
            onClick={()=>{setColor("blue")}}>blue
            </button>

            <button className="outline-dotted px-3 bg-purple-400 rounded-2xl" 
            onClick={()=>{setColor("purple")}}>purple
            </button>
            </div>

            </div>
            
        </div>
    </>
  )
}

export default App

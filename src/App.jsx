import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1><b className='red'>I</b>ncrement <b className='red'>D</b>ecrement <b className='red'>C</b>ounter</h1>
    <div className='divv'>
<button className='button' onClick={() => setCount((count)=> count + 1)}><b className='red'>I</b>ncrement</button>
<button className='button' onClick={() => setCount((count)=> count - 1)}><b className='red'>D</b>ecrement</button>
<button className='button' onClick={() => setCount((count)=> count = 0)}><b className='red'>R</b>eset</button>
     </div>
    <h1>{count}</h1>
    </>
  )
}

export default App

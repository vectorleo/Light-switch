import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import clsx from 'clsx'




function App() {

  const [isOn , toggleLigth ] = useState (false)

  return(
    <div className={clsx("flex  items-center justify-center h-screen ", isOn ?'bg-slate-600':'bg-yellow-200')}>
    <button className='cursor-pointer' onClick={()=>{
      toggleLigth(!isOn)
    }}>
      <div className={clsx("h-8 w-6",isOn ? 'bg-slate-200' :'bg-slate-300') }></div>
      <div className={clsx("h-8 w-6",isOn ? 'bg-slate-300' :'bg-slate-200') }></div>
    </button>
    </div>
  )
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isOnline,setIsOnline] = useState(navigator.onLine)

  const handleCheck = () =>{
      setIsOnline(navigator.onLine)
  }

  useEffect(()=>{
      window.addEventListener('online',handleCheck)
      window.addEventListener('offline',handleCheck)
  },[])
  
  return(
      <>
          <div style={{textAlign:'center'}}>
             <h1>{isOnline?'Online':'Offline'}</h1>
          </div>
      </>
  )
}

export default App

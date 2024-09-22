import { useState } from 'react'
import AppRouter from './router/AppRouter'
import Papel from './components/Papel'
import FocusInput from './components/Ejemplos'

import './App.css'

function App() {

  return (
      <div className='App'>
        <Papel/>
        {/* <Diagram title= "JointJS+"/> */}
      </div>
  )
}

export default App

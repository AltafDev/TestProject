import React from 'react'
import {BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Signup from './Forms/Signup'
import Register from './Forms/Register'
import ViewUsers from './Forms/ViewUsers'
const App = () => {
  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='/Registeration' element={<Register/>}  />
    <Route path='/ViewUser' element={<ViewUsers/>}  />

  </Routes>
</Router>

</>
  )
}

export default App
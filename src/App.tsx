import './App.css'
// import LoginForm from './Components/Login'
import Register from './Components/Login/Register'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>

      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

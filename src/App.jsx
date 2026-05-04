import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './components/Login/Login'

function App() {
  
  return (
    <div className='h-full'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App

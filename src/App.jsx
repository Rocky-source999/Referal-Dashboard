import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './components/Login/Login'
import Header from './components/Header/Header'

function App() {
  const location=useLocation()
    const hide=location.pathname!=='/login'
  
  return (
    <div className='h-full'>
      {hide && <Header/>}
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

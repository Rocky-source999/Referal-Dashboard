import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'

function App() {
  
  return (
    <div className='h-full'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}


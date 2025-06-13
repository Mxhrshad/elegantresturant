import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Menu from './pages/Menu/Menu'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  )
}


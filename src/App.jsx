import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}


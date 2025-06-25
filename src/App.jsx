import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Reservation from './pages/Reservation/Reservation'
import Appetizers from './pages/appetizers/Appetizers'
import MainCourses from './pages/MainCourses/MainCourses'
import Desserts from './pages/Desserts/Desserts'
import Beverages from './pages/Beverages/Beverages'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/reservation' element={<Reservation />} />     
      <Route path='/menu/appetizers' element={<Appetizers />} />
      <Route path='/menu/maincourses' element={<MainCourses />} />
      <Route path='/menu/desserts' element={<Desserts />} />
      <Route path='/menu/beverages' element={<Beverages />} />
    </Routes>
  )
}


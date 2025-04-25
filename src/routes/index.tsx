import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Burners from '../pages/Burners'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/burners' element={<Burners />} />
    </Routes>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'

export default function Path() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<><Home /></>} path='/' />
    </Routes>
    </BrowserRouter>
  )
}

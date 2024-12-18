import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

import RootLayout from './RootLayout/RootLayout'
import Categories from './pages/categories/Categories'
import Deon from './pages/deon/Deon'
import About from './pages/about/About'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Jenson from './pages/jenson/Jenson'
import Krisha from './pages/krisha/Krisha'

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='categories' element={<Categories />} />
      <Route path='deon' element={<Deon />} />
      <Route path='jenson' element={<Jenson />} />
      <Route path='krisha' element={<Krisha />} />
      <Route path='*' element={<NotFound />} />
    </Route>
))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
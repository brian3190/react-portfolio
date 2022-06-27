import './App.scss'
import { Routes, Route } from 'react-router-dom'
import  Home  from './components/Home'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import logo from './logo.svg';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/react-portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
    </>
  )
}

export default App

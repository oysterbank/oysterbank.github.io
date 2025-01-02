import { Routes, Route } from "react-router"
import Nav from "./Nav"
import Home from './Home'
import About from "./About"
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

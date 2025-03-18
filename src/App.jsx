import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { Home } from './components/Pages/Home'
import { About } from './components/Pages/About'
import { Blog } from './components/Pages/Blog'
import { Contact } from './components/Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

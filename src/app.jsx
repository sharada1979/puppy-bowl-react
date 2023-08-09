import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Allplayers from './components/Allplayers'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm.jsx'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Allplayers/>} />
        <Route path='/:id' element={<SinglePlayer />} />
        <Route path='/create' element={<NewPlayerForm />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  )
}

export default App
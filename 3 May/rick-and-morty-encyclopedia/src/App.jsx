import { Routes, Route } from 'react-router-dom'
import CharacterGallery from './components/CharacterGallery'
import CharacterDetail from './components/CharacterDetail'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterGallery />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  )
}

export default App

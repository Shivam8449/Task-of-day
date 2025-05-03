import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'
import FooterClock from './FooterClock'

function CharacterGallery() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
      .then(data => setCharacters(data.results))
  }, [page])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Rick and Morty Encyclopedia</h1>
      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px', padding: '20px' 
      }}>
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Previous</button>
        <span style={{ margin: '0 10px' }}> Page {page} </span>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
      <FooterClock />
    </div>
  )
}

export default CharacterGallery

import React, { useState, useEffect, useMemo, useCallback } from 'react'

function App() {
  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  const HandleAdd = useCallback(() => {
    setTech([...tech, newTech])
    setNewTech('')
  }, [newTech, tech])

  useEffect(() => {
    const storageTech = localStorage.getItem('tech')

    if (storageTech) {
      setTech(JSON.parse(storageTech))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  const techSize = useMemo(() => tech.length, [tech.length])

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={HandleAdd}>
        Adicionar
      </button>
    </>
  )
}

export default App

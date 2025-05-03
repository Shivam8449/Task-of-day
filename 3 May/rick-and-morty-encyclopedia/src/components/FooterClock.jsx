import { useState, useEffect } from 'react'

function FooterClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px' }}>
      {time.toLocaleTimeString()} {time.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
    </footer>
  )
}

export default FooterClock

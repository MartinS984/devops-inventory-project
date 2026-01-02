import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('Loading...')
  const [dbTime, setDbTime] = useState(null)

  useEffect(() => {
    // Fetch data from the Backend API (running on port 5000)
    fetch('http://localhost:5000/db-health')
      .then(res => res.json())
      .then(data => {
        setStatus(data.status)
        setDbTime(data.time)
      })
      .catch(err => setStatus('API Connection Failed'))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>DevOps Inventory Manager</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <h3>System Status</h3>
        <p><strong>Backend:</strong> {status}</p>
        <p><strong>Database Time:</strong> {dbTime || 'Waiting for data...'}</p>
      </div>
    </div>
  )
}

export default App
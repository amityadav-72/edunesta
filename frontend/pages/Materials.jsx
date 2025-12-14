import { useEffect, useState } from 'react'
import API from '../services/api'

export default function Materials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    API.get('/materials').then(res => setItems(res.data))
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Materials</h2>
      {items.map(m => (
        <a key={m._id} href={`http://localhost:8080/uploads/${m.filepath}`} target="_blank">
          <div className="border p-2 mt-2">{m.title}</div>
        </a>
      ))}
    </div>
  )
}

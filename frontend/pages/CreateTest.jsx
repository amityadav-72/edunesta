import { useState } from 'react'
import API from '../services/api'

export default function CreateTest() {
  const [title, setTitle] = useState('')

  const submit = async e => {
    e.preventDefault()
    await API.post('/tests', { title })
    alert('Test created')
  }

  return (
    <form onSubmit={submit} className="p-6">
      <input placeholder="Test title" onChange={e=>setTitle(e.target.value)} className="border p-2 mr-2" />
      <button className="bg-sky-600 text-white px-4 py-2">Create</button>
    </form>
  )
}

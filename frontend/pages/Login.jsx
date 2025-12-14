import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async e => {
    e.preventDefault()
    const res = await API.post('/auth/login', { email, password })
    localStorage.setItem('token', res.data.token)
    res.data.user.role === 'teacher'
      ? navigate('/teacher')
      : navigate('/student')
  }

  return (
    <form onSubmit={submit} className="p-6 max-w-md">
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} className="border p-2 w-full mb-2" />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} className="border p-2 w-full mb-2" />
      <button className="bg-sky-600 text-white px-4 py-2">Login</button>
    </form>
  )
}

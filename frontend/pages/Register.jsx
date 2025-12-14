import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const submit = async e => {
    e.preventDefault()
    const res = await API.post('/auth/register', form)
    localStorage.setItem('token', res.data.token)
    navigate(form.role === 'teacher' ? '/teacher' : '/student')
  }

  return (
    <form onSubmit={submit} className="p-6 max-w-md">
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} className="border p-2 w-full mb-2" />
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} className="border p-2 w-full mb-2" />
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})} className="border p-2 w-full mb-2" />
      <select onChange={e=>setForm({...form,role:e.target.value})} className="border p-2 w-full mb-2">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button className="bg-sky-600 text-white px-4 py-2">Register</button>
    </form>
  )
}

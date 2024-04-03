import { useState } from "react"
import axios from 'axios'

export default function Login() {
  const [data, setData] = useState({
    name: '',
    password: '', 
  })

  const loginUser = (e) => {
    e.preventDefault()
    axios.get('/')
  }

  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Name</label>
        <input type='text' placeholder='Enter Name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

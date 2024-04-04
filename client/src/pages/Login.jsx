import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    password: '', 
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {name, password} = data
    try {
      const {data} = await axios.post('/login', {
        name, 
        password
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({});
        navigate('/dashboard') //************after user login in redirect user to Dashboard page */
      }
    } catch (error) {
        console.log(error)
    }
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

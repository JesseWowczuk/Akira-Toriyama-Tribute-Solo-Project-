import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'; 
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/login') //********Need to rediract the user after login  */
      }
    } catch(error) {
        console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit' className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

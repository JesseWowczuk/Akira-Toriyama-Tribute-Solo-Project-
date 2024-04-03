import { useState } from "react"

export default function Register() {
  const [data, setData] = useState({
    name: '',
    password: '',
  })

  const registerUser = (e) => {
    e.preventDefault()   
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter Name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    passward: '',
    passward2: ''
  })
  const [name, email, passward, passward2] = formData

  return (
    <div>
      
    </div>
  )
}

export default Register

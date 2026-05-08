import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // declare our state here 

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  // three states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  // strength state goes here 
  const [strength, setStrength] = useState("")
  // function to handle submit 
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Please wait...........")
    // create an empty digital envelope 
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)
    try {
      const response = await axios.post("http://higgs.alwaysdata.net/api/signup", formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {

    }
  }
  // step two of password strength 
  const checkPasswordStrength = (password) => {
    if (password.length < 4) {
      setStrength("weak")

    } else if (password.lenth < 8) {
      setStrength("Medium")
    } else {
      setStrength("Strong")
    }
  }
  return (
    <div className="row  mt-3  justify-content-center" >
      <div className='col-md-6  card  shadow  bg-dark'>
        <h1>Signup</h1>
        {/* bind the states  */}
        <h2 className='text-success'> {loading} </h2>
        <h2 className='text-danger'> {success} </h2>
        <h2 className='text-info'> {error} </h2>
        <form action="" onSubmit={handlesubmit}>
          <input type="text" placeholder='Provide Username' className='form-control' onChange={(e) => setUsername(e.target.value)} /><br /><br />

          <input type="email" placeholder='Provide email' className='form-control' onChange={(e) => setEmail(e.target.value)} /><br /><br />



          <input type="number" placeholder='Provide phone' className='form-control' onChange={(e) => setPhone(e.target.value)} /><br /><br />

          {/* step three goes here  */}
          <input type="password"
            className='form-control'
            placeholder='Enter Password'
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }
            }
          /> <br />

          {/* step 4 goes here  */}
          {password && (
            <p
              style={{
                color:
                  strength === "weak"
                    ? "red"
                    : strength === "Medium"
                      ? "orange"
                      : "Green",
              }}
            >
              password strength ; {strength}
            </p>


          )
          }

          <button type='submit' className='btn   btn-info w-100'>Signup</button><br /><br />

          <p className='text-success'>Already have an account?      <Link to="/signin">Signin</Link>  </p>

        </form>
      </div>
    </div>
  )
}

export default Signup
import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Signin = () => {
    // declare our states here 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // define 3 states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    // function to handle submitt 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait.........")
        //  empty the digital envelope 
        const formdata = new FormData()
        formdata.append("email", email)
        formdata.append("password", password)
        try {
            const response = await axios.post("http://higgs.alwaysdata.net/api/signin", formdata)
            setSuccess(response.data.message)
            setLoading("")
         if (response.data.user) {
            localStorage.setItem("user",JSON.stringify(response.data.user))
            Navigate("/");
         }   
        } catch (error) {
            setLoading("")
            setError("something is not right");
        }


    }
    return (
        

        
        <div className='row mt-2  justify-content-center '>
            <div className='col-md-6  card  shadow  bg-danger'>
                <h1 className='text-danger'>Signin</h1>
             {/* bind the states  */}
            <h2 className='text-success'> {loading} </h2>
            <h2 className='text-danger'> {success} </h2>
            <h2 className='text-info'> {error} </h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="Email" placeholder='Provide email' className='form-control' onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                    <input type="password" placeholder='Provide password' className='form-control' onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type='submit' className='btn   btn-info w-100'>Signin</button><br /><br />
                    <p  className='text-success'>Do you have ana account? <Link to="/signup">Signup</Link></p>
                </form>

            </div>

        </div>
      
    )
}

export default Signin


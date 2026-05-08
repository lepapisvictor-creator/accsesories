import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
const Makepayment = () => {
    const { singleproduct } = useLocation().state || {}
    const imagepath = "http://victorkifaru.alwaysdata.net/static/images/"
    // declare the states here 
    const [phone, setPhone] = useState("")
    // 3 states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")


    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait.....")
        const Formdata = new FormData()
        Formdata.append("phone", phone)
        Formdata.append("amount", singleproduct.product_cost)

        try {
            const response = await axios.post("http://victorkifaru.alwaysdata.net/api/mpesa_payment", Formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError("something is not right")
            setLoading("")
        }

    }



    return (
        <div className="row justify-content-center">
            <h1 className='text-success'>Make Payment  - Lipa  Na Mpesa</h1>
            <div className='col-md-8  card  shadow  p-4'>
                {/* image goes here  */}
                <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "300px", objectFit: "cover" }} />

                <h4 className='text-danger   text-start'>{singleproduct.product_name}</h4>
                <p className='text-start'>{singleproduct.product_description}</p>
                <b className='text-start   text-info'>ksh  {singleproduct.product_cost}</b>
                {/* bind the states  */}

                <h2 className='text-danger'>{loading}</h2>
                <h2 className='text-dark'>{success}</h2>
                <h2 className='text-info'>{error}</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="number" placeholder='Enter phone 254xxxxxxxxx  ' className="form-control  text-start" onChange={(e) => setPhone(e.target.value)} /><br /><br />
                    <button type='submit' className='btn  btn-success w-100'>Make Payment</button>
                </form>

            </div>
        </div>
    )
}

export default Makepayment
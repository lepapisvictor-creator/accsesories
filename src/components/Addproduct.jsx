import axios from 'axios'
import React ,{useState} from 'react'

const Addproduct = () => {
    // declare our states here 
    const   [product_name,   setProductName] =useState("")
    const   [product_description,  setProductDescription]  =useState("")
    const   [product_cost  ,  setProductCost]  =useState("")
    const   [product_photo,   setProductPhoto]  =useState("")

    // 3 states for posting data 
    const  [loading, setLoading]  = useState("")
    const  [success, setSuccess]  = useState("")
    const  [error,  setError]  = useState("")
    // function to handle submit 
    const  handlesubmit = async (e) =>{
       e.preventDefault ()
       setLoading("Please wait.......")
    //    create an empty envelope 
    const  formdata= new FormData()
    formdata.append("product_name" , product_name)
    formdata.append("product_description"  ,product_description)
    formdata.append("product_cost" , product_cost)
    formdata.append("product_photo", product_photo)   
    try {
        const response= await axios.post("http://victorkifaru.alwaysdata.net/api/add_product",formdata)
        setSuccess(response.data.message)
        setLoading("")
}       catch (error) {

    }

    }
  return (  
    <div  className='row  justify-content-center   mt-2'>
        <div  className='col-md-6  card  shadow  p-4'>
            <h1  className='text-danger'>Choose products</h1>
            {/* bind states  */}
            <h2  className='text-warning'>{loading}</h2>
            <h2  className='text-success'>{success}</h2>
            <h2  className='text-warning'>{error}</h2>
            <form action=""  onSubmit={handlesubmit}>
                <input type="text"  placeholder='Avail Product name'  className='form-control  text-danger' onChange={(e)=>setProductName(e.target.value)}/><br /><br />
                <textarea name="" id="" className='form-control  text-success'  placeholder='Avail product description'  onChange={(e)=>setProductDescription (e.target.value)}></textarea> <br /><br />
                <input type="number"  placeholder='Avail product cost'className='form-control' onChange={(e) =>setProductCost(e.target.value)}/><br /><br />
                <input type="file" accept='image/*' className='form-control' onChange={(e)=>setProductPhoto(e.target.files[0])}/> <br /><br />
                <button type='submit' className='btn  btn-success  w-100'>Chhose product</button>
            </form>

        </div>

    </div>
  )
}

export default Addproduct
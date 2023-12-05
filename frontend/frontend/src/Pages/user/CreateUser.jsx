import React, { useState } from 'react'
import Signup from './Signup';
import Otp from './Otp';


const CreateUser = () => {
    const [childata, setchildata] = useState(false);
    const handlechild = (data)=>{
        setchildata(data)
    }

  return (
    <div>
       
    {childata ?  <Otp/> : 
    <Signup  updatechild ={handlechild} />
   
    
    }
    

    </div>
  )
}

export default CreateUser
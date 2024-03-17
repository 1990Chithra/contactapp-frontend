import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  const location = useNavigate()
 
  const [id,setId]=useState("")
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [city,setCity]=useState("")
  const [street,setStreet]=useState("")
  const [number,setNumber]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")

  const base_url='http://localhost:8000/add-a-user'


const addUser=async(e)=>{
  e.preventDefault()
  console.log(id,firstname,lastname,city,street,number,email,phone);
  const body={id,firstname,lastname,city,street,number,email,phone}
    const result=await axios.post(base_url,body).then((result)=>{
      console.log(result);
      alert(result.data.message)
      location('/')//redirected to adminpage
    }).catch((error)=>{
      alert("Please enter a unique employee id")
    })
}
  
  
  return (
    <div>
      <h1 className='text-center m-5 p-5' style={{color:'coral'}}>Add Contacts</h1>
      <div className='row d-flex'>
          <div className='col-6'>
              <img src="https://www.freeiconspng.com/thumbs/contact-icon-png/contacts-icloud-9.png" alt="" width={'600px'}  style={{marginLeft:'20px'}}/>
          </div>
          <div className='col-6'>
              <form className='text-center m-5 p-5 w-75' style={{marginTop:'20px',borderColor:'#ff0000 #00ff00 #0000ff',borderStyle:'solid',backgroundColor:'blanchedalmond',boxShadow:'5px 10px 18px white',borderRadius:'25px'}}>
                  <MDBInput  onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg'/>
                  <br />
                  <MDBInput onChange={(e)=>setFirstname(e.target.value)} label='Firstname' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setLastname(e.target.value)} label='Lastname' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setCity(e.target.value)} label='City' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setStreet(e.target.value)} label='Street' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setNumber(e.target.value)} label='Number' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Email' id='formControlLg' type='text' size='lg' />
                   <br />
                  <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone' id='formControlLg' type='text' size='lg' />
                  <br />
                  <div className='text-center'>
                    <button  onClick={(e)=>addUser(e)} className='btn btn-warning m-3'>Add<i class="fa-solid fa-user-plus fa-beat"></i></button>
                  </div>
            </form>

          </div>
      </div>
      
     
    
    </div>
  )
}

export default Add
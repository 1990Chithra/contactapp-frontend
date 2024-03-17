import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edit() {

  const [userId,setuserId]=useState("")
  const [userFirstname,setuserFirstname]=useState("")
  const [userLastname,setuserLastname]=useState("")
  const [userCity,setuserCity]=useState("")
  const [userStreet,setuserStreet]=useState("")
  const [userNumber,setuserNumber]=useState("")
  const [userEmail,setuserEmail]=useState("")
  const [userPhone,setuserPhone]=useState("")

  //get a particular id from the url
  const {id}=useParams()
  console.log(id);//4


//get a particular employee details
const getUser=async(id)=>{
  const result = await axios.get(`${base_url}/get-a-user/${id}`)//user details
  console.log(result.data.users);//object
  setuserId(result.data.users.id)
  setuserFirstname(result.data.users.firstname)
  setuserLastname(result.data.users.lastname)
  setuserCity(result.data.users.city)
  setuserStreet(result.data.users.street)
  setuserNumber(result.data.users.number)
  setuserEmail(result.data.users.email)
  setuserPhone(result.data.users.phone)

}
useEffect(()=>{
  getUser(id)
},[])

// const location= useNavigate()

const location= useNavigate()


// //update function
    const base_url='http://localhost:8000'
    //api call to update an employee details
    const updateUser=async(e)=>{
      e.preventDefault()
      const body={
        id:userId,
        firstname:userFirstname,
        lastname:userLastname,
        city:userCity,
        street:userStreet,
        number:userNumber,
        email:userEmail,
        phone:userPhone
        
      }
        const result= await axios.post(`${base_url}/update-a-user/${id}`,body)
        console.log(result);
        alert(result.data.message)
        location('/')//back to admin
    }


  return (
    <div>
      <h1 className='text-center m-5 p-5' style={{color:'coral'}}>Edit Contacts</h1>
      <div className='row d-flex'>
          <div className='col-6'>
              <img src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-emptyhanded-3d-white-man-emerging-from-png-image_10120748.png" alt="" width={'500px'}  style={{marginLeft:'100px',marginTop:'120px'}}/>
          </div>
          <div className='col-6'>
              <form className='text-center m-5 p-5 w-75' style={{marginTop:'20px',borderColor:'#ff0000 #00ff00 #0000ff',borderStyle:'solid',backgroundColor:'blanchedalmond',boxShadow:'5px 10px 18px white',borderRadius:'25px'}}>
                  <MDBInput  onChange={(e)=>setuserId(e.target.value)} value={userId} label='Id' id='formControlLg' type='text' size='lg'/>
                  <br />
                  <MDBInput onChange={(e)=>setuserFirstname(e.target.value)} value={userFirstname} label='Firstname' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setuserLastname(e.target.value)} value={userLastname} label='Lastname' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setuserCity(e.target.value)} value={userCity} label='City' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setuserStreet(e.target.value)} value={userStreet} label='Street' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setuserNumber(e.target.value)} value={userNumber} label='Number' id='formControlLg' type='text' size='lg' />
                  <br />
                  <MDBInput onChange={(e)=>setuserEmail(e.target.value)} value={userEmail} label='Email' id='formControlLg' type='text' size='lg' />
                   <br />
                  <MDBInput onChange={(e)=>setuserPhone(e.target.value)} value={userPhone} label='Phone' id='formControlLg' type='text' size='lg' />
                  <br />
                  <div className='text-center'>
                    <button onClick={(e)=>updateUser(e)} className='btn btn-warning m-3'>Update<i class="fa-solid fa-user-plus fa-beat"></i></button>
                  </div>
            </form>

          </div>
      </div>
    </div>
  )
}

export default Edit
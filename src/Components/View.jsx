import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function View() {

    const base_url='http://localhost:8000'

    const [userData,setuserData]=useState({})
  
    const {id}=useParams()
    console.log(id);
    //get a particular user
  
    const viewUser=async(id)=>{
      const result=await axios.get(`${base_url}/get-a-user/${id}`)//details from the server
      console.log(result.data.users);
      setuserData(result.data.users)
  }
  console.log(userData);
  
  useEffect(()=>{
   viewUser(id)
  },[])
  

  return (
    <div className='view'>
        <h1 className='text-center m-3 p-3' style={{color:'coral'}}>View Contacts</h1>
        <div className='row d-flex'>
            <div className='col-6 m-5 p-5'>
            <img src="https://i.pinimg.com/originals/33/64/2c/33642c39a5f8561b7fae89faccd4fb7e.gif" alt=""  width={'600px'} height={'800px'}/>
            </div>
            <div className='col-6 m-5 p-5' style={{width:'500px',height:'800px'}}>
              <MDBCard style={{backgroundColor:'GrayText',boxShadow:'5px 10px black',border:'1px solid'}}>
              <MDBCardImage position='top' alt='...' src='https://icon-library.com/images/ios-contact-icon/ios-contact-icon-11.jpg' />
              <MDBCardBody>
                  <MDBCardTitle className='text-center text-danger'><b>User Details</b></MDBCardTitle>
              </MDBCardBody>
                  {
                      <MDBListGroup flush>
                      <MDBListGroupItem>Id:{userData.id}</MDBListGroupItem>
                      <MDBListGroupItem>Firstname:{userData.firstname}</MDBListGroupItem>
                      <MDBListGroupItem>Lastname:{userData.lastname}</MDBListGroupItem>
                      <MDBListGroupItem>City:{userData.city}</MDBListGroupItem>
                      <MDBListGroupItem>Street:{userData.street}</MDBListGroupItem>
                      <MDBListGroupItem>Number:{userData.number}</MDBListGroupItem>
                      <MDBListGroupItem>Email:{userData.email}</MDBListGroupItem>
                      <MDBListGroupItem>Phone:{userData.phone}</MDBListGroupItem>
                      </MDBListGroup>
                  }
              </MDBCard>
            </div>

        </div>
        
        
        <div className='text-center m-4 p-4'>
        <MDBBtn href='/' className='btn btn-warning'>Go to Home</MDBBtn>
        </div>

    </div>
  )
}

export default View

import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {Row,Col} from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { MDBSpinner } from 'mdb-react-ui-kit';


function Admin() {

  const base_url='http://localhost:8000'

  const [allUsers,setAllUsers]=useState([])

  const fetchData=async()=>{
    const result=await axios.get(`${base_url}/get-all-users`);
    console.log(result.data.users);
    setAllUsers(result.data.users)
  }
  console.log(allUsers);

  const deleteAUser=async(id)=>{
    const result=await axios.delete(`${base_url}/delete-a-user/${id}`)
    console.log(result);
    fetchData()
  }
  

  useEffect(()=>{
    fetchData()
  })

 
  
  return (
   <div>
    
        <h1 className='text-center m-3 p-3' style={{color:'red'}}>Bestie Bonds</h1>
      <div className='container-xxl m-5 p-5'>
        <div className='row1 d-flex'>
          <div className='col-6'>
              <p style={{textAlign:'justify'}}>
                  The best contact apps stand at the ready to implement some order on your disorganized address book. All those duplicate entries cluttering up your contacts will be a thing of the past, and that's just the start of what a good contact app can do for you.
                  Besides that level of basic tidying up, the best contact apps let you create groups for easier messaging, manage sales relationships and keep important info at the ready. Some of these apps even have their own dialer so that you can make a call without having to jump back to the phone app on your handset.
                  In other words, the best contact apps offer more than what you'll get from the native Contacts app on your Android device or from the iPhone's Contacts offering. We've searched through both Google Play and the iOS App Store — here are the best choices for organizing your contacts that we've found.
              </p>
          </div>
          <div className='col-6 m-5 p-5 d-flex' style={{marginLeft:'20px',backgroundColor:'lightgray',borderRadius:'25px'}}>
            <div className='col-2 me-5'>
              <img src="https://moein.video/wp-content/uploads/2021/12/Whatsapp-Logo-GIF-WhatsApp-Icon-GIF-Royalty-Free-Animated-Icon-GIF-350px-after-effects-project.gif" alt="" width={'100px'}/>
            </div>
            <div className='col-2 me-5'>
              <img src="http://www.wilsoninfo.com/email/at-email-animated.gif" alt="" width={'100px'}/>
            </div>
            <div className='col-2 me-5'>
              <img src="https://media.tenor.com/images/31ccb27140f799dd89cd6beefbcdfc86/tenor.gif" alt="" width={'100px'}/>
            </div>   
            <div className='col-2 me-5'>
              <img src="https://media0.giphy.com/media/vRfWXyo1FNDjvxqcgt/giphy.gif?cid=6c09b952y647cq5b9k7z1l9b0pna4ghmfqr5mwy7fihd4uhu&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" width={'100px'}/>
            </div>      
          </div>
          
        </div>
      </div>
      <div>
      <MDBSpinner grow color='primary' style={{marginLeft:'40%'}}>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='success'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='warning'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='danger'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='info'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='light'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      </div>
      <div className='container-xxl m-5 p-5'>
      <Row>
          {
              allUsers.map((item)=>(
                  <Col sm={12} md={6} lg={4} xl={3}> 
                    <MDBCard className='mt-3' style={{backgroundColor:'wheat'}}>
                      <MDBCardImage src='https://icon-library.com/images/ios-contact-icon/ios-contact-icon-11.jpg' position='top' alt='...' />
                      <MDBCardBody>
                        <MDBCardTitle style={{color:'Highlight',fontWeight:'800px'}}><span>{item.firstname}</span><span>{item.lastname}</span></MDBCardTitle>
                        <MDBCardText>
                          <p><b>Id:</b>{item.id}</p>
                          <p><b>City:</b>{item.city}</p>
                          <p><b>Street:</b>{item.street}</p>
                          <p><b>Number:</b>{item.number}</p>
                          <p><b>Email:</b>{item.email}</p>
                          <p><b>Phone:</b>{item.phone}</p>
                        </MDBCardText>
                        <div className='justify-content-evenly text-center'>
                          <Link to={`view/${item.id}`}>
                          <i class="fa-solid fa-eye fa-beat text-primary" style={{marginLeft:'20px'}}></i>
                          </Link>
                          <Link to={`edit/${item.id}`}>
                          <i className='fa-solid fa-pen-to-square fa-beat text-info' style={{marginLeft:'20px'}}></i>
                          </Link>
                          <i onClick={(e)=>deleteAUser(item.id)} className='fa-solid fa-trash fa-beat text-danger' style={{marginLeft:'20px'}}></i>
                        </div>    
                      </MDBCardBody>
                    </MDBCard>
                </Col>
                ))
          }
         
         </Row>
        
      </div>
      <div className='m-5 text-center'>
        <Link to={'add'}>
        <button className='btn btn-info'><i class="fa-solid fa-plus fa-beat "></i>Add</button>
        </Link>
      </div>
   </div>
  )
}

export default Admin
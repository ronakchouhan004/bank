import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from '../components/Base'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import  axios from "axios"
import base_url from '../api/bootapi'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

   
    const navigate = useNavigate()
   const getAllUsers=()=> {
    axios.get(`${base_url}/users`).then(
        (res)=>{
            console.log(res)
        },
        (err)=>{
            console.log(err)
        }
    )
   }
   


    const [data,setData]=useState({
      name:'',
      email:'',
      address:'',
      account_no:'',
      mobile:'',
      password:''  
    })

    const [error,setError] = useState({
        errors:{},
        isError:false
    })

    useEffect(()=>{
        console.log(data)
    },[data])

    const handleChange = (event,property) => {
        // console.log(event.target.value)
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            name:'',
            email:'',
            address:'',
            account_no:'',
            mobile:'',
            password:'' 
        })
    }

    const submitForm=(e)=> {
        e.preventDefault()
        getAllUsers();
        
        // data validate

        // call server api for sending data
        axios.post(`${base_url}/users`,{
            name:data.name,
            email:data.email,
            address:data.address,
            account_no:data.account_no,
            mobile:data.mobile,
            password:data.password
        }).then(res=>{
            if(res.status==200){
                toast.success("SuccessFully Registered!");
                resetData()

               
            }
        })

        
    };

 

    return (
            <Base>
        <Container >
            {/* {JSON.stringify(data)} */}
            <Row className='mt-4'>
                <Col sm={{size:6,offset:3}}>
                <Card>
                <CardHeader>
                    <h1>Fill Information to Register</h1>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for="name">Enter Your Name:</Label>
                            <Input type='text' id='name' onChange={(e)=>handleChange(e,'name')} value={data.name} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Enter Your Email:</Label>
                            <Input type='email' id='email' onChange={(e)=>handleChange(e,'email')} value={data.email} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Enter Your Address:</Label>
                            <Input type='textarea' id='address' onChange={(e)=>handleChange(e,'address')} value={data.address} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="account_no">Enter Your Account Number:</Label>
                            <Input type='number' id='account_no' onChange={(e)=>handleChange(e,'account_no')} value={data.account_no} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="mobile">Enter Your Mobile Number:</Label>
                            <Input type='tel' minLength={10} maxLength={10} pattern="[0-9]{10}" id='mobile' onChange={(e)=>handleChange(e,'mobile')} value={data.mobile} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Enter Your Password</Label>
                            <Input type='password' id='password' onChange={(e)=>handleChange(e,'password')} value={data.password} required/>
                        </FormGroup>
                        <Container className='text-center'>
                            <Button color='dark'>Register</Button>
                            <Button onClick={resetData} color='secondary' type='reset' className='ms-2'>Reset</Button>
                            <ToastContainer />
                        </Container>
                    </Form>
                </CardBody>
            </Card>
                </Col>
            </Row>




            
        </Container>
        </Base>
       
        
    )
  }
  
  export default Signup
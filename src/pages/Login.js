import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from '../components/Base'
import base_url from '../api/bootapi'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [data,setData]=useState({
        account_no:'',
        password:''  
      })

      const handleChange = (event,property) => {
        // console.log(event.target.value)
        setData({...data,[property]:event.target.value})
    }


    const resetData=()=>{
        setData({  
            account_no:'',
            password:'' 
        })
    }

    const submitForm=(e)=> {
        e.preventDefault()
        

        // call server api for sending data
        axios.get(`${base_url}/users/${data.account_no}`).then(res=>{
           if(res.status==200){
            if(res.data.account_no == data.account_no && res.data.password == data.password)
            {
                navigate("/");
            }
           }
        },
        (err)=>{
            toast.error("Login Credentials Not Found");
            resetData();
        }
        )

        
    };

    return (
        <Base>
        <Container>
            <Row className='mt-4'>
                <Col sm={{size:6,offset:3}}>
                    <Card>
                    <CardHeader>
                    <h1>login Form</h1>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for="account_no">Enter Your Account Number:</Label>
                            <Input type='number' id='account_no' onChange={(e)=>handleChange(e,'account_no')} value={data.account_no}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Enter Your Password</Label>
                            <Input type='password' id='password' onChange={(e)=>handleChange(e,'password')} value={data.password}/>
                        </FormGroup>
                        <Container className='text-center'>
                            <Button color='dark'>Login</Button>
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
  
  export default Login
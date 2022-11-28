
import BaseHome from '../components/BaseHome'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import base_url from '../api/bootapi'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Money_Transfer = () => {
    const navigate = useNavigate()
    const [data,setData]=useState({
        account_no:'',
        other_account_no:'',
        amount:''
      })

      const handleChange = (event,property) => {
        // console.log(event.target.value)
        setData({...data,[property]:event.target.value})
    }


    const resetData=()=>{
        setData({  
            account_no:'',
            other_account_no:'' ,
            amount:''
        })
    }

    const submitForm=(e)=> {
        e.preventDefault()
        console.log(data)
        

        // call server api for sending data
        axios.get(`${base_url}/users/${data.account_no}`).then(res=>{
           if(res.status==200){
            if(res.data.account_no == data.account_no && res.data.current_bal >= data.amount)
            {   

                axios.post(`${base_url}/users`,{
                    name:res.data.name,
                    email:res.data.email,
                    address:res.data.address,
                    account_no:res.data.account_no,
                    mobile:res.data.mobile,
                    password:res.data.password,
                    prev_bal:res.data.current_bal,
                    current_bal:res.data.current_bal - data.amount
                }).then(res=>{
                    if(res.status==200){
                        toast.success("SuccessFully Registered!");
                        resetData()
        
                       
                    }
                })
                

                toast.success("Money_Transfered Successfully!");
            }
           }
        },
        (err)=>{
            toast.error("Error Occured during your Transaction");
            resetData();
        }
        )



        
    };



    return (
        <BaseHome>
      
       <Container>
            <Row className='mt-4'>
                <Col sm={{size:6,offset:3}}>
                    <Card>
                    <CardHeader>
                    <h1>Money Transfer</h1>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for="account_no">Enter Your Account Number:</Label>
                            <Input type='number' id='account_no' onChange={(e)=>handleChange(e,'account_no')} value={data.account_no}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="other_account_no">Enter Other Account Number:</Label>
                            <Input type='number' id='other_account_no' onChange={(e)=>handleChange(e,'other_account_no')} value={data.other_account_no}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount">Enter Amount:</Label>
                            <Input type='number' id='amount' onChange={(e)=>handleChange(e,'amount')} value={data.amount}/>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="password">Enter Your Password</Label>
                            <Input type='password' id='password' onChange={(e)=>handleChange(e,'password')} value={data.password}/>
                        </FormGroup> */}
                        <Container className='text-center'>
                            <Button color='dark'>Transfer Money</Button>
                            <Button onClick={resetData} color='secondary' type='reset' className='ms-2'>Reset</Button>
                            <ToastContainer />
                             </Container>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>

        </BaseHome>
    )
  }
  
  export default Money_Transfer
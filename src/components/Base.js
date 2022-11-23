import React from 'react'

import MyNavbar from './MyNavbar'


const Base = ({title="welcome",children}) => {
  return (
    <div className='container-fluid p-0 m-0'>
        <MyNavbar color='dark' dark expand='md' fixed=''  />
        {children}
        
    </div>
  )
}

export default Base
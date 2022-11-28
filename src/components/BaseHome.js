import React from 'react'

import HomeNavbar from './HomeNavbar'


const BaseHome = ({title="welcome",children}) => {
  return (
    <div className='container-fluid p-0 m-0'>
        <HomeNavbar color='dark' dark expand='md' fixed=''  />
        {children}
        
    </div>
  )
}

export default BaseHome
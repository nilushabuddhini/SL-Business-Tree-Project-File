import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='container mt-5 text-center'>
        <br /><br />
        <h1 className='text-center' style={{ fontSize:'100px' }}>Sorry</h1>
        <strong><h1 className="text-center font-weight-bold text-secondary" style={{ fontSize:'95px', fontWeight:'600' }}>Page not found!</h1></strong>
        <h3 className='text-center'>Error code <strong className='text-danger' style={{ fontSize:'70px'}}>404!</strong></h3>
        <p>The page {window.location.href} not found</p>
        <br />
        <Link to='/' className='btn btn-warning text-center'>Return back to home page</Link>
    </div>
  )
}

export default NotFound
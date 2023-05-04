import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const Navigate=useNavigate()
  return <>
  <div className='pagenotfound'>
    <h2>404 Page Not Found</h2>
    <h4 onClick={()=>Navigate('/')}>GO Back</h4>
    </div>
  </>
}

export default PageNotFound
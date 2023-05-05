import React,{useEffect} from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const Navigate = useNavigate()
  // useEffect(() => {
  //   document.title = 'Oops, looks like the page is lost';
  // }, []);
  return <>

    <div class="container">
      <img alt="img"style={{ "width": "27rem" }} src="/images/something-lost.png" />
      <br />
      <p1 style={{ 'font-size': '1.8rem' }}>Oops, looks like the page is lost.</p1>
      <br />
      <p style={{ 'font-size': '1.6rem' }} class="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
      <br />
      <h4 onClick={() => Navigate('/')}><b>GO Back</b></h4>

    </div>
  </>
}

export default PageNotFound
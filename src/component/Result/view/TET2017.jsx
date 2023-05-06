import React, { useState } from 'react'
import "./TET2017.css"
import { Link } from 'react-router-dom'
const TET2017 = () => {

  const[rollNo,setRollNo]=useState('');
  const[dob,setdob]=useState('');
  const findResult=(e)=>{
    e.preventDefault()
    console.log(rollNo+" "+dob)
  }
  return <>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="header-section">
              <div class="col-sm-2">
                <div class="main-logo">
                  <Link to="/"><img src="/images/logo.png" alt="" class="img-responsive" /></Link>
                </div>
              </div>
              <div class="col-sm-9">
                <div class="header-text f-bold">
                  <p class="h2"><strong>Results of Teacher Eligibility Test (TET), 2017 (for Classes I to V )</strong></p><br/>
                  <p><b>West Bengal Board of Primary Education</b></p>
                </div>
              </div>
              <div class="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-line"></div>
      <div class="header-line"></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="btn-section">
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container" id="main-section">
      <div class="messages-holder text-center">


      </div>
      <div class="row">
        <div class="col-sm-12" style={{ "margin": "20px 0 20px 0" }}>
          <div class="col-sm-12">
            <div class="home-left" style={{ "box-shadow": "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset" }}>
              <h3 class="text-center" style={{ "fontSize": "16px", "color": "#f43838", "fontWeight": "600", "padding-top": "20px" }}></h3>
              <div class="scroll-index" id="text-div" style={{ "padding": "10px" }}>
               

                
                  <div class="row">


                  </div>
                  <div class="Wrap f-semi-bold">
                    <div class="row inputBox" style={{ "padding": "10px" }}>
                      <div class="form-group">
                        <label class="control-label" style={{ "color": "#212529" }}>Roll Number <span class="span">*</span> : </label>
                        <input type="text" class="form-control" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter your Roll Number" />
                      </div>
                      <div class="form-group">
                        <label class="control-label" style={{ "color": "#212529" }}>Date Of Birth <span class="span">*</span> : </label>
                        <input  type="date" name="begin"
                          placeholder="mm-dd-yyyy" 
                          min="1997-01-01"  class="form-control"
                          value={dob} onChange={(e)=>setdob(e.target.value)}
                          />
                      </div>


                      <div class="form-group">
                        <div class="continue-btn f-semi-bold">

                          <input type="submit" class="btn btn-lg btn-danger" onClick={(e)=>findResult(e)} style={{ "color": "#ffffff", "width": "180px" }} />

                        </div>

                      </div>

                    </div>


                  </div>
                


              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="black">
              <p class="text-center">Best viewed in all modern browsers (latest versions): Chrome 90+, Firefox 80+ with minimum resolution of 1024x768</p>
              <p class="text-center">Please do not access this portal from any mobile devices.</p>
              <p class="text-center">Copyright © 2022 <span class="test-uppercase">West Bengal Board of Primary Education</span>, Kolkata</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default TET2017
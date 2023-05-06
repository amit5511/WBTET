import React from 'react'
import './TetCertificate.css'
import { Link } from 'react-router-dom'
const TetCertificate = () => {
    return <>
        <header>
            <div classNameName="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="header-section">
                            <div className="col-sm-2">
                                <div className="main-logo">
                                    <Link to="/"><img src="images/logo.png" alt="" className="img-responsive" /></Link>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <div className="header-text f-bold">
                                    <p className="h2">West Bengal Board of Primary Education</p>
                                    <p>Application Submission Portal for issue of TET-Pass Certificate</p>
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-line"></div>
            <div className="header-line"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="btn-section">
                        </div>
                    </div>
                </div>
            </div>
        </header>


        {
            //section
        }
        <div className="container" id="main-section">
            <div className="messages-holder text-center">


            </div>
            <div className="row">
                <div className="col-sm-12" style={{ "margin": "20px 0 20px 0" }}>
                    <div className="col-sm-4">
                        <div className="home-left" style={{ "boxShadow": "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset" }}>
                            <h3 className="text-center" style={{ "fontSize": "16px", "color": "#f43838", "fontWeight": "600", "paddingTop": "20px" }}>Notice</h3>
                            <div className="scroll-index" id="text-div">
                                <ul style={{ "paddingBottom": "20px" }} className="recent-post-ul">

                                    <li style={{ "fontWeight": "bold" }}>
                                        <Link to="https://wbbprimary.org/prim/notice/WBBPE_Online_Portal_for_Issue_of_TET_Pass_Certificate_V_1_1.pdf" target="_blank">
                                            <img alt="img" src="/images/recent-arrow.png"/> User Manual
                                        </Link>
                                    </li>
                                  
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div style={{ "boxShadow": "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset", "minHeight": "330px", "height": "auto" }} className="home-left1">
                            <h3 style={{ "padding": "10px", "textAlign": "center", "color": "#f43838", "fontWeight": "600" }}>Important Dates</h3>
                            <p style={{ "borderBottom": "1px solid #999", "margin": "5px" }}></p>
                            <div className="scroll-index" id="text-div1">
                                <ul className="home-middle-ul">
                                    <li style={{ "padding": "0 15px", "fontWeight": "bold", "fontStyle": "italic" }}>Start Date of Application Form Fill-up and Submission is 06-08-2022</li>
                                    <li style={{ "padding": "0 15px", "fontWeight": "bold", "fontStyle": "italic" }}>End Date of Application Form Fill-up and Submission is 30-09-2022.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="btn-section" style={{ "marginTop": "12%" }}>
                            <p className="text-center h4">New User Registration</p>

                            <Link to="registration" className="btn btn-link" style={{ "display": "block", "marginBottom": "20px" }}>Click here to Proceed</Link>
                            <br />
                            <p className="text-center h4">Existing User Login</p>

                            <Link to="/login" className="btn btn-link" style={{ "display": "block", "marginBottom": "20px" }}>Click here to proceed</Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="black">
                            <p className="text-center">Best viewed in all modern browsers (latest versions): Chrome 90+, Firefox 80+ with minimum resolution of 1024x768</p>
                            <p className="text-center">Please do not access this portal from any mobile devices.</p>
                            <p className="text-center">Copyright © 2022 <span className="test-uppercase">West Bengal Board of Primary Education</span>, Kolkata</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default TetCertificate
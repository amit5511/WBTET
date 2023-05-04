import React from 'react'

const BodyLeft = ({setstate}) => {
  return <>
  <div className="body-left">
		    <div className="block_content">			
				<div id="nav"> 
				    <div className="ddsmoothmenu-v">
					    <ul>
					 
                            <li onClick={()=>setstate(0)}><p className='home_a'>Home</p></li>
                            <li onClick={()=>setstate(1)}><p className='home_a'>Our Vision</p></li>
                            <li onClick={()=>setstate(2)}><p className='home_a'>Historical Background</p></li>
                            <li onClick={()=>setstate(3)}><p className='home_a'>Policies, Functions & Challenges</p></li>
                            <li onClick={()=>setstate(4)}><p className='home_a'>Organogram of WBBPE</p></li>
                            <li onClick={()=>setstate(5)}><p className='home_a'>Making of Curriculum & Materials</p></li>
                            <li onClick={()=>setstate(6)}><p className='home_a'>Training & Orientation</p></li>
                            <li onClick={()=>setstate(7)}><p className='home_a'>Evaluation Process</p></li>
                            <li onClick={()=>setstate(8)}><p className='home_a'>Sarva Shiksha Abhiyan</p></li>
                            <li onClick={()=>setstate(9)}><p className='home_a'>Annual Sports Meet</p></li>
 
                            <li onClick={()=>setstate(11)}><p className='home_a'> Networking with National and <br />
						    International Agencies <br/></p></li>
                            <br/>
                            <li onClick={()=>setstate(12)}><p className='home_a'>Problems & Prospects</p></li>
                            <li onClick={()=>setstate(13)}><p className='home_a'>E-Books</p></li>
					        
	
					    </ul>
				    </div>
			    </div>
			</div>
            </div>

			{
				//nortification
			}
			<div class="clear"></div>
        <div class="left-bot">
           
            <div class="left-bot-li">
                <ul>
                    <ul>

                        <li><a href="WBBPE_NOTICE/NOTICE_02_11_2017.html"><b>Notice for TET Qualified D.El.Ed./D.Ed. (Special Education) passed non-empanelled candidates</b></a>&nbsp;
                        <img alt="img" src="/images/new.gif"></img>
                        </li>

                        <li><a href="WBBPE_NOTICE/RegNIOS.html"><b>Fresh Registration for D.El.Ed. Course through NIOS</b></a>&nbsp;</li>
                        <li><a href="WBBPE_NOTICE/NIOS.html"><b>Information regarding Online Registration for Six Month D.El.Ed. Bridge Course for B.Ed. In-service Primary (I-V) Teachers</b></a>&nbsp;</li>
                        <li><a href="WBBPE_NOTICE/NOTICE_02_11_2017.html"><b>Notice for TET Qualified D.El.Ed./D.Ed. (Special Education) passed non-empanelled candidates</b></a>&nbsp;
                        <img alt="img" src="/images/new.gif"></img>
                        </li>
						
                        

                        
                    </ul>
                    </ul >

            </div>
           
        </div>
  </>
}

export default BodyLeft
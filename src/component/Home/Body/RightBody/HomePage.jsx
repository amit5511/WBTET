import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return <>
        <div class="body-right">
            <div>
                <div id="banner">
                    <img alt="img" src="images/banner.jpg" />
                </div>
                <div id="acharya">
                    <div class="ar-left">
                        <div id="acharyahead">
                            <img alt="img" src="images/theachatext.jpg" />
                        </div>
                        <div id="acharyadet">
                            "What else the students can't do? They can rise up to the occasion and can do a lot of works. China upheld the flag of freedom and became free with the help of these students. Arrangement for spread of primary education among those who were devoid of the light of knowledge was made by the lakhs of students in the city of Peking when the civil war broke out in china ... A near era has dawned in our country. We require new approach to education by innovative strategy."
                        </div>
                    </div>
                    <div class="ar-right">
                        <div id="theacharya">
                            <img alt="img" src="images/theachraya.jpg" />
                        </div><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>

                    <div>
                        <div>
                            <img alt="img" src="images/new.gif" />
                            <h5><b><Link to="/result/TET2017" >Click here </Link>
                                RESULT OF TET-2017-EXAMINATION, CONDUCTED BY WBBPE
                                </b>
                                </h5><br />
                        </div>
                        <div>
                            <img alt="img" src="images/new.gif" />
                            <h5><b><Link to="https://wbbprimary.org/View/Results_status_tet.php" target="_blank">Click Here </Link> Statewide Third Merit List (vacancy wise,
                                Medium wise, Category wise) of TET-2014 qualified and Trained candidates.</b></h5>
                            <br />
                        </div>
                        <div>
                            <img alt="img" src="images/new.gif" />
                            <h5><b><Link to="/prim">Click Here </Link>TET-2014 PASS CERTIFICATE FOR THE TET-2014 QUALIFIED AND TRAINED CANDIDATES<br />
                            </b></h5>

                        </div>


                    </div>
                </div>
            </div>
        </div>
        
    </>
}



export default HomePage
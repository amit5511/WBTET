import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return <>
        <div class="body-right">
            <div>
                <div id="banner">
                    <img src="images/banner.jpg" />
                </div>
                <div id="acharya">
                    <div class="ar-left">
                        <div id="acharyahead">
                            <img src="images/theachatext.jpg" />
                        </div>
                        <div id="acharyadet">
                            "What else the students can't do? They can rise up to the occasion and can do a lot of works. China upheld the flag of freedom and became free with the help of these students. Arrangement for spread of primary education among those who were devoid of the light of knowledge was made by the lakhs of students in the city of Peking when the civil war broke out in china ... A near era has dawned in our country. We require new approach to education by innovative strategy."
                        </div>
                    </div>
                    <div class="ar-right">
                        <div id="theacharya">
                            <img src="images/theachraya.jpg" />
                        </div><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>

                    <div>
                        <div>
                            <img src="images/new.gif" />
                            <h3><Link to="https://wbbprimary.org/result" target="_blank">Click here </Link>
                                RESULT OF TET-2017-EXAMINATION, CONDUCTED BY WBBPE</h3><br />
                        </div>
                        <div>
                            <img src="images/new.gif" />
                            <h3><Link to="https://wbbprimary.org/View/Results_status_tet.php" target="_blank">Click Here </Link> Statewide Third Merit List (vacancy wise,
                                Medium wise, Category wise) of TET-2014 qualified and Trained candidates.</h3>
                            <br />
                        </div>
                        <div>
                            <img src="images/new.gif" />
                            <h3><Link to="https://wbbprimary.org/prim/" target="_blank">Click Here </Link>TET-2014 PASS CERTIFICATE FOR THE TET-2014 QUALIFIED AND TRAINED CANDIDATES<br />
                            </h3>

                        </div>


                    </div>
                </div>
            </div>
        </div>
        
    </>
}



export default HomePage
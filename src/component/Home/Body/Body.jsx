import React, { useState } from 'react'
import BodyLeft from './BodyLeft/BodyLeft'
import "./Body.css"

import Footer from '../../footer/Footer'
import Networking from './RightBody/Networking'
import Vision from './RightBody/Vision'
import HomePage from './RightBody/HomePage'
import AnnualSport from './RightBody/AnnualSport'

import Ebook from './RightBody/Ebook'
import Evaluation from './RightBody/Evaluation'
import HistoricalBg from './RightBody/HistoricalBg'
import Organogram from './RightBody/Organogram'
import SarvaShikshaAbhiyan from './RightBody/SarvaShikshaAbhiyan'
import Traning from './RightBody/Traning'
import Policies from './RightBody/Policies'
import Problem from './RightBody/Problem'
import MakingOfCurriculum from './RightBody/MakingOfCurriculum'

export const Body = () => {
  const [state,setstate]=useState(0);
    const HomeComponent= {
        
            0:<HomePage/>,
            1:<Vision/>,
            2:<HistoricalBg/>,
            3:<Policies/>,
            4:<Organogram/>,
            5:<MakingOfCurriculum/>,
            6:<Traning/>,
            7:<Evaluation/>,
            8:<SarvaShikshaAbhiyan/>,
            9:<AnnualSport/>,
            
            11:<Networking/>,
            12:<Problem/>,
            13:<Ebook/>
        
    }
    return <>
        <div className="body-main">
            <div className="body-content">
                <div> 
                    <BodyLeft setstate={setstate}/>
                </div>
                {HomeComponent[state]}
                
            </div>
            <Footer />
        </div>
    </>
}

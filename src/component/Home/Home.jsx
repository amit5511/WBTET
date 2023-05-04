import React from 'react'
import Header from './Header/Header'
import './home.css'
import { Body } from './Body/Body'
import Footer from '../footer/Footer'
const Home = () => {
    return <>
        <div id="page">
            <div className="wrapper">
                <Header />
                <Body/>
               
            </div>
        </div>

    </>
}

export default Home
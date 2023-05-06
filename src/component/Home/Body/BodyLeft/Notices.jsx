import React from 'react'
import { Link } from 'react-router-dom'

const Notices = ({notice}) => {
    const baseUrl="https://wbbprimary.org/"
    
    return <>
        <Link to={baseUrl+notice.src} target="_blank" ><b>{notice.title}</b></Link>&nbsp;
        {notice.img?<img alt="img" src={notice.img}></img>:<span></span>}
        <br/> <br/>
</>
}

export default Notices
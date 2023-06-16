import React from "react";
import {useNavigate} from "react-router-dom"
import Styles from './LadingPag.module.css'
import VIDEOstart from './videoSTART.mp4'
import ladingSTART from '../img/startt2.gif'
import LOGO from '../img/PokLOGO.png'


const LadingPag = (props)=>{
    const navigate = useNavigate()
    
    return(
        <div className={Styles.pagDiv}>
            <div className={Styles.videoBackground}>
            <video autoPlay loop>
                <source src={VIDEOstart} type="video/mp4"/>
            </video>
            </div>
            <div className={Styles.startPag}>
                <img type='button' onClick={()=>navigate('/home')} src={ladingSTART} alt="" />
            </div>
            <div className={Styles.imgLogo}>
                <img src={LOGO} alt="" />
            </div>
                
        </div>
    )
    
}

export default LadingPag
import React from "react";
import {useNavigate} from "react-router-dom"
import Styles from './LadingPag.module.css'
import VIDEOstart from '../img/videoSTART.mp4'
import ladingSTART from '../img/startt2.gif'
import LOGO from '../img/PokLOGO.png'


const LadingPag = (props)=>{
    const navigate = useNavigate()
    
    return(
    
        <div className={Styles.pagDiv}> 
        
            <video autoPlay playsInline muted loop>
                <source src={VIDEOstart} type="video/mp4"/>
            </video>
            
            <div className={Styles.imgs}>
                <img className={Styles.startPag2} src={LOGO} alt="" />
                <img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={ladingSTART} alt="" />
            </div>           
                
                            
        </div>
    
    )
    
}

export default LadingPag
import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TitleTwo from './TitleTwo'
import useCounter from '../Hooks/useCounter'


function HomeContent() {

    const [count,increament,decreament] = useCounter(0)
    return (
        <div >
        
            
            <div className= "social-mediaIcons">
                <ul>
                    <li><Link to="#"><FaFacebook/> Facebook</Link></li>
                    <li><Link to="#"><FaInstagram/> Instagram</Link></li>
                    <li><Link to="#"><FaTwitter/> Twitter</Link></li>
                </ul>
            </div>
            <div className="home-details"  style={{color:'white',width:"12rem"}}>
            <TitleTwo title="frontend web developer" 
                pragraph="Please join me to design effective, meaningful designs with intellectual, rational rigor along to elicit emotions and beliefs in web designing." 
                 buttonText ="view portfolio"
               
                 />


  




            </div>
         
            
            
        </div>
    )
}

export default React.memo(HomeContent)

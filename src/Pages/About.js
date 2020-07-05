import React from 'react'
import background4 from '../images/background4.jpg'
import { GeneralBackground } from '../components/StyledComponents'


import AboutContent from '../components/AboutContent'
import TitleOne from '../components/TitleOne'





function About() {
    return (
        <div>
         <GeneralBackground img={background4} hieght="400">
             <div className="about-nav">
             <TitleOne  title="about me" slug="about" />
             </div>
             
         </GeneralBackground>
         <AboutContent/>
   
            
        </div>
    )
}

export default About

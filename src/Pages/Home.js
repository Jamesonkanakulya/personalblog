import React from 'react'
import {GeneralBackground} from '../components/StyledComponents'
import background from '../images/background.jpg'
import HomeContent from '../components/HomeContent'
import AboutContent from '../components/AboutContent'
function Home() {
    return (
        <div className= "home-container">
            
        <GeneralBackground  img ={background}>
            <HomeContent/>
     
        </GeneralBackground>
       <AboutContent/>
          
        </div>
    )
}

export default Home

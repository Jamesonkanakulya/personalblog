import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>

           <BackgroundImage myImage='errorBackgrundImage'>
               <div className = "banner">
                  <div className="banner-center">
                  <h4>ERROR 404</h4>
                   <p>No such Page is found</p>
                   <button><Link to='/' >Back home</Link></button>
                  </div>

               </div>
               
           </BackgroundImage>
            
        </div>
    )
}

export default ErrorPage

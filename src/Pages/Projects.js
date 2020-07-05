import React from 'react'
import background4 from '../images/background4.jpg'
import { GeneralBackground } from '../components/StyledComponents'
import ProjectContent from '../components/ProjectContent'
import TitleOne from '../components/TitleOne'

function Projects() {
    return (
        <div>
        <GeneralBackground img={background4} hieght="400">
        <div className="about-nav">
                 
           <TitleOne title="project "slug="projects"/>
            
            </div>
         </GeneralBackground>
         <ProjectContent/>
          
        </div>
    )
}

export default Projects

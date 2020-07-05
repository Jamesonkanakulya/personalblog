import React from 'react'
import TitleTwo from './TitleTwo'
import top  from '../images/top.jpeg'
import next  from '../images/next.jpeg'

function AboutContent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">

                    <div className="aboutRight-backgroundThree"></div>
                    <div className="aboutRight-backgroundOne">
                        <img src={next} alt="full"/>
                    </div>
                    <div className="aboutRight-backgroundTwo">
                    <img src={top} alt="half "/>
                    </div>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-details">
                        <TitleTwo title="this is an introduction about myself"
                            pragraph="I am an experienced Mechanical 
                                        Engineer and Web developer, my main objective is to
                                        develop engineering solutions and 
                                        implement engineering procedures
                                        and processes to maintain consistent performance of the 
                                        machines. Part of this objective is to conduct regular monitoring of
                                        the machines and equipment to ensure that the machineries are functioning 
                                        as designed. "

                            buttonText="learn more"
                            buttonColor="#f81c1c"
                            hoverColor="#141619"

                        />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutContent

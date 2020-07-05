import React from 'react'
import useInput from '../Hooks/useInput'
import background4 from '../images/background4.jpg'
import { GeneralBackground } from '../components/StyledComponents'
import ContactContent from '../components/ContactContent'
import TitleOne from '../components/TitleOne'

function Contact() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindlastName, resetLastName] = useInput('')

    const handleForm = e => {
        e.preventDefault()

        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <>
            <div className=" contact-container">


                <GeneralBackground img={background4} hieght="400">

                <div className="about-nav">
             <TitleOne  title="contact" slug="contact" />
             </div>
                 
                </GeneralBackground>
                





            </div>
            <ContactContent/>

            
        </>
    )
}

export default Contact

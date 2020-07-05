import React from 'react'
import ContactDetails from './ContactDetails'
import TitleThree from '../components/TitleThree'
import ContactForm from './ContactForm'

function ContactContent() {
    return (
        <>

            <div className="contact-details">


                <div className="container">







                    <div className="row">
                        <div className="col-lg-7 ">

                            <div className="row">
                                <TitleThree paragraph="Please feel in the form below to contact us.Thank you"
                                    pOne="Get " redcontent="in" pTwo="Touch" />
                                <ContactForm/>
                               


                            </div>

                        </div>
                        <div className="col-lg-4 ">
                            <div className="mycontainer">
                                
                                <ContactDetails />

                            </div>


                        </div>

                    </div>






                </div>



            </div>

        </>
    )
}

export default ContactContent

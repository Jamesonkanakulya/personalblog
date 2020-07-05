import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaArrowRight,FaFacebook,FaTwitter,FaInstagram,} from 'react-icons/fa'
import {FiPhone,FiMapPin,FiMail } from "react-icons/fi"
import moment from 'moment'


import { Link } from 'react-router-dom';
import useInput from '../Hooks/useInput'
import ContactDetails from './ContactDetails';



function Footer() {
    const handleSearch = e =>{
        e.preventDefault()
        console.log(search);
        
        resetSearch()

    }
     const [search, bindSearch, resetSearch] =useInput('')



    return (
        <div className="footer-container">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <h4>about me</h4>
                    <p>I am an experienced
                    Mechanical Engineer,
                    my main objective is to develop engineering solutions and implement mechanical engineering procedures and processes to maintain consistent performance
             of the machines.</p>

                    <p>Copyright ©2020 All
                    rights reserved
                    This template
                    is made with
             by Jameson Kanakulya </p>

                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <h4>Newsletter</h4>
                    <p>Stay updated with the latest trends</p>

                    <form onSubmit = {handleSearch}>
                        <input type="text"
                            placeholder="please enter your email"
                            {...bindSearch}
                        />
                        <span><button type="submit"><FaArrowRight/></button></span>
                    </form>
                    <h4>Follow us</h4>
                    <span >
                        <ul>
                            <li><Link to="#"><FaFacebook/></Link></li>
                            <li><Link to="#"><FaInstagram/></Link></li>
                            <li><Link to="#"><FaTwitter/></Link></li>
                            <span>{moment().startOf('hour').fromNow()} </span>
                        </ul>
                        
                      
                        
                    </span>

                </div>


                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <div style={{fontSize: "1.3rem"}}>
                         <ContactDetails />
                         <span>{moment().calendar()} </span>
                      

                    </div>
                   
                </div>
               
            </div>

        </div>


        



            
               

                
            




        </div>
        
    )
}

export default Footer

import React,{useState} from 'react'
import { BsFillChatFill } from "react-icons/bs";
import { AiFillHeart, AiFillLike } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import useCounter from '../Hooks/useCounter';


function LikesComment() {
   // cont [like,setLikes] = useState('Likes')
    const[heart,increamentHearts,decreamentHearts]= useCounter(0)
    const[likes,increamentlikes,decreamentlikes]= useCounter(0)





    return (
        <div className="likesComments">
            <ul>
    <li  className="mr-5" ><button style={{ color: 'red' }} onClick={increamentHearts} ><AiFillHeart />{heart}</button></li>
                <li  className="mr-5" ><button style={{ color: 'blue' }} onClick={increamentlikes}  ><AiFillLike /> {likes}</button> likes</li>
                <li><span ><button><  BsFillChatFill /></button></span>  comments</li>

                <li id="socialmedia">
                    <span className="mr-4" >Share on</span>
                        <li className="mr-2" ><Link to="#"><FaFacebook /></Link></li>
                        <li className="mr-2" ><Link to="#"><FaInstagram /></Link></li>
                        <li className="mr-2" ><Link to="#"><FaTwitter /></Link></li>
                
                </li>
            </ul>

       


        </div>
    )
}

export default LikesComment

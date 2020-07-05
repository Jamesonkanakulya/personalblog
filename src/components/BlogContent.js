import React, { useContext, useState, useEffect } from 'react'
import { PostContext } from './Context'
import { Link } from 'react-router-dom'
import BlogSideComponent from './BlogSideComponent'
import { BsPersonFill, BsFillChatFill } from "react-icons/bs";
import { AiFillHeart, AiFillLike } from "react-icons/ai";

import moment from 'moment'
import LikesComment from './LikesComment';
import TitleThree from './TitleThree';
import ContactForm from './ContactForm';

function BlogContent(props) {
    const [slug, setslug] = useState("personal-blog")
    const [project, setproject] = useState([])
    const myposts = useContext(PostContext)
    const [newImages, setimage] = useState()



    useEffect(() => {
        if (!slug || !myposts.project) {
            return <div>
                <h3> No such post found</h3>
            </div>
        }

        let myitems = myposts.project.find(item => item.slug === slug)
        setproject(myitems)



    }, [myposts.project, slug])





    if (!project) {
        return <div>
            <h3> No such post found</h3>
        </div>

    }

    console.log(project);










    return (
        <div className="container">


            <div className="row">
                <div className="col-lg-8 mt-3">
                    <div className="blogcontent-right ">
                        {!project.images ? null : <img style={{ width: '100%' }} src={project.images[0]} alt={project.title} />
                        }
                        <h2>{project.title}</h2>
                        <p>
                            <span className="mr-3"><Link to='#'><BsPersonFill />{project.author}</Link> </span>|
                            <span className="ml-3">{moment(project.postedDate).calendar()} </span>

                        </p>
                        <p>{project.content}</p>
                        <div className="border-top pd-3 pt-3" />
                        <LikesComment />

                        <TitleThree 
                            pOne="Please" redcontent="leave" pTwo=" a comment" />
                        <ContactForm send="comment" />




                    </div>




                </div>
                <div className="col-lg-4 mt-3">
                    <div className="blogcontent-left">
                        <BlogSideComponent  {...props} />

                    </div>

                </div>

            </div>



        </div>
    )
}

export default BlogContent

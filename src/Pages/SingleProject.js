import React, { Component } from 'react'
import background4 from '../images/background4.jpg'
import { GeneralBackground } from '../components/StyledComponents'

import TitleOne from '../components/TitleOne'
import { PostContext } from '../components/Context'
import { Link } from 'react-router-dom'
export class SingleProject extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mypost: {},
            slug: this.props.match.params.slug,

        }
    }

    static contextType = PostContext;

    post = (items) => {
        const projectPost = items.find(post => post.slug === this.state.slug);

        return projectPost

    }


    componentDidMount() {





    }



    render() {
        const newpost = this.post(this.context.project)
        console.log(newpost);

        if (!newpost) {
            return <div>
                <h4>No such project could be found</h4>
            </div>
        }

        const [mainImg, ...otherImg] = newpost.images

        return (
            <>
                <GeneralBackground img={background4} hieght="400">
                    <div className="about-nav">

                        <TitleOne title="project " slug="projects" />

                    </div>
                </GeneralBackground>



                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">

                         <div className ="projectLeft">
                         {otherImg.map((image, i) => {
                                return <img className="sideImages" style={{ width: '100%' }} key={i} src={image} alt="Sample" />




                            })

                            }

                         </div>
                        </div>


                        <div className="col-lg-8 ">

                            <div className="projectRight">
                                <img  src={mainImg} style={{ width: '100%' }} alt="Main Home" />
                                <h3>{newpost.title}</h3>
                                <p>{newpost.content}</p>
                                <p id="author"> created by:{newpost.author}</p>
                                <span style={{fontStyle:'italic'}}>Click <Link to="#">here</Link> to view a demo of the website</span>

                            </div>


                        </div>

                    </div>


                </div>






            </>
        )
    }
}

export default SingleProject

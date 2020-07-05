import React, { useContext } from 'react'
import TitleThree from './TitleThree'
import { Link } from 'react-router-dom'

import { PostContext } from './Context'

function ProjectContent() {
    const project = useContext(PostContext)
    console.log(project.project);
    return (
        <>

            <div className="container">
                <div className="TitleThreeHeader">
                    <TitleThree paragraph="if you work with passion great things happen"
                        pOne="check out " redcontent="recent" pTwo="work" />

                </div>


                <div className="project-nav">
                    <ul>
                        <li>
                            <Link to="#">
                                mechanical projects
                        </Link>

                        </li>
                        <li>
                            <Link to="#">
                                web design projects
                        </Link>
                        </li>
                    </ul>
                </div>

                <div className="project-details">
                    <div className="row">
                        {
                            project.project.map(post => {
                                return <div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
                                    <article>
                                        <img src={post.images[0]} alt={post.title} />
                                        <h4><Link to={`/projects/${post.slug}`}>{post.title}</Link></h4>
                                        <p>{post.shortDescription} <Link className="readmore" to={`/projects/${post.slug}`}>Read more...</Link></p>

                                    </article>

                                </div>

                            })
                        }
                    </div>


                </div>


            </div>

        </>
    )
}

export default ProjectContent

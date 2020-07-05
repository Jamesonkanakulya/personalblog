import React,{useContext} from 'react'
import { PostContext } from './Context';


function Post(props) {

    const myposts = useContext(PostContext)
    console.log(myposts.post);
    
   
    
    
    return (
        <div>
            hello posts
            {
                !myposts?null:<div>
                    {}
                </div>
            }
            
            
        </div>
    )
}

export default Post

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, } from './StyledComponents'

function TitleTwo({title,pragraph,buttonText,buttonColor,hoverColor}) {
    return (
        <div className="homeContent-text">
        <h1> {title}</h1>
    <p>{pragraph}</p>
    <Button backColor={buttonColor}  hoverColor={hoverColor}><Link to="#">{buttonText}</Link></Button>

    </div>
    )
}

export default TitleTwo

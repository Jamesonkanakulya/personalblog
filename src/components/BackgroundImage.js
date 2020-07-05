import React from 'react'

export const BackgroundImage = ({children,myImage}) => {
    return (
        <div className={myImage} >
            {children}
        </div>
    )
}
export default BackgroundImage

import React from 'react'
import '../../../styles/MainSlide.css'

export default function MainSlide ({header, img, handleClick, btnText}) {
    const style = {
        backgroundImage: `url(${img})`
    }
    return (
        <div className="mainSlide" style={style}>
            <h1 className="header">{header}</h1>
            <a href="http://google.com" className="button" onClick={handleClick}>{btnText}</a>
        </div>
    )
}
import React from 'react'
import '../../../styles/ClientSlide.css'

const imgStyle = {
    width: '100%'
}

export default function ClientSlide ({number, img, text}) {
    return (
        <div className="mySlides">
            <div className="numbertext">{number}</div>
            <img src={img} style={imgStyle}/>
            <div className="text">{text}</div>
        </div>
    )
}
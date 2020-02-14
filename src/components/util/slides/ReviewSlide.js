import React from 'react'
import '../../../styles/ReviewSlide.css'


export default function ReviewSlide ({name, position, text, photo}) {
    return (
        <div className="reviewSlide" >
            <p className="review">{text}</p>
            <div className="customerCard">
                <img className="photo" src={photo} />
                <p className="name">{name}</p>
                <p className="position">{position}</p>
            </div>
        </div>
    )
}
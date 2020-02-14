import React from 'react'
import Carousel from './util/Carousel'
import ClientSlide from './util/slides/ClientSlide'
import img from '../resources/Logo.svg'

const SLIDES = [
    {
        img: img
    },
    {
        img: img
    },
    {
        img: img
    },
    {
        img: img
    },
    {
        img: img
    },
    {
        img: img
    },
    {
        img: img
    },
    {
        img: img
    }
]

export default function Clients() {
        const slides = SLIDES.map((slide,index, slides) => {
            const {text, img} = slide
            const number = `${(index+1)}/${slides.length}`
            return <ClientSlide key={index} number={number} text={text} img={img}/>
        })
        return (
            <div className="sectionContainer">
                <p className="sectionHeader">Наши клиенты</p>
                <p className="sectionTitle servicesTitle">С нами работают</p>
                <Carousel showCount="4">
                    {slides}
                </Carousel>
            </div>
        )
}
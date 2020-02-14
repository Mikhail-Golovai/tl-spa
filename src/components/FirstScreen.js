import React from 'react'
import Carousel from './util/Carousel'
import MainSlide from './util/slides/MainSlide'
import img from '../resources/FirstScreen.svg'
import '../styles/FirstScreen.css'

const SLIDES = [
    {
        header: 'Бухгалтерские услуги в Санкт-Петербурге',
        img,
        btnText: 'Наша презентация',
        handleClick: () => window.alert('You clicked da btn!')
    },
    {
        header: 'Бухгалтерские услуги в Санкт-Петербурге',
        img,
        btnText: 'Наша презентация',
        handleClick: () => window.alert('You clicked da btn!')
    },
    {
        header: 'Бухгалтерские услуги в Санкт-Петербурге',
        img,
        btnText: 'Наша презентация',
        handleClick: () => window.alert('You clicked da btn!')
    },
    {
        header: 'Бухгалтерские услуги в Санкт-Петербурге',
        img,
        btnText: 'Наша презентация',
        handleClick: () => window.alert('You clicked da btn!')
    }
]

export default function FirstScreen() {
        const slides = SLIDES.map((slide,index, slides) => {
            const {header, img, handleClick, btnText} = slide
            return <MainSlide key={index} header={header} handleClick={handleClick} img={img} btnText={btnText}/>
        })
        return (
            <div className="sectionContainer firstScreenContainer">
                <Carousel showCount="1">
                    {slides}
                </Carousel>
            </div>
        )
}
import React, { Component } from 'react'
import Carousel from './util/Carousel'
import ReviewSlide from './util/slides/ReviewSlide'
import '../styles/Reviews.css'

import photo from '../resources/Photo.svg'

const LOREM_IPSUM = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
const SLIDES = [
    {
        name: 'Екатерина Иванова',
        position: 'Директор ООО "Рога и Копыта"',
        text: LOREM_IPSUM,
        photo
    },
    {
        name: 'Екатерина Иванова',
        position: 'Директор ООО "Рога и Копыта"',
        text: LOREM_IPSUM,
        photo
    },
    {
        name: 'Екатерина Иванова',
        position: 'Директор ООО "Рога и Копыта"',
        text: LOREM_IPSUM,
        photo
    },
    {
        name: 'Екатерина Иванова',
        position: 'Директор ООО "Рога и Копыта"',
        text: LOREM_IPSUM,
        photo
    }
]

class Reviews extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }
    
    render () {
        const slides = SLIDES.map((slide,index, slides) => {
            const {name, position, text, photo} = slide
            return <ReviewSlide key={index} name={name} position={position} text={text} photo={photo}/>
        })
        return (
            <div className="sectionContainer">
                <p className="sectionHeader">Отзывы</p>
                <p className="sectionTitle servicesTitle">Ваши благодарности</p>
                <Carousel>
                    {slides}
                </Carousel>
            </div>
        )
    } 
}

export default Reviews
import React, { Component } from 'react'
import '../../styles/Carousel.css'

class Carousel extends Component {

    constructor (props) {
        super(props)
        this.state = {
            slideIndex: 1
        }
        this.plusSlides = this.plusSlides.bind(this)
        this.preventSlideOverflow = this.preventSlideOverflow.bind(this)
        this.getSlidesBorders = this.getSlidesBorders.bind(this)
    }


    // Next/previous controls
    plusSlides(n) {
        this.setState((prev) => {
            return {
                slideIndex: this.preventSlideOverflow(prev.slideIndex += n)
            }
        })
    }

    currentSlide(n){
        this.setState((prev) => {
            return { slideIndex: n }
        })
    }

    preventSlideOverflow(newIndex) {
        const length = this.props.children.length
        if (newIndex > length) {return newIndex % length}
        if (newIndex < 1) {return length - (length - newIndex) % length}
        return newIndex
    }

    getSlidesBorders() {
        const { showCount = 1, children } = this.props
        const { slideIndex } = this.state
        const rigthIndex = this.preventSlideOverflow(slideIndex + (showCount % children.length) - 1)
        return rigthIndex >= slideIndex ?
                [{r: rigthIndex-1, l: slideIndex-1}] :
                [{l: 0, r: rigthIndex-1}, {l: slideIndex-1, r: children.length-1}]
    }

    render() {
        const propSlides = this.props.children
        const ranges = this.getSlidesBorders()
        const {slides, dots} = propSlides.reduce((acc, slide, index, slides) => {
            const slideStyle = ranges.some(b=>isInRange(index,b)) ? {display: 'block'} : {display: 'none'}
            const dotClassName = ranges.some(b=>isInRange(index,b)) ? 'dot active' : 'dot' 
            acc.slides.push(<div key={index} className="fade" style={slideStyle}>{slide}</div>)
            acc.dots.push(<span key={index} className={dotClassName} onClick={() => this.currentSlide(index+1)}></span>)
            return acc;
        }, {slides: [], dots: []});
        
        return (
            <div>
                <div className="slideshow-container">
                    {slides}
                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>
                <br/>

                <div className="dotsContainer">
                    {dots}
                </div>
            </div>
        )
    }
}

function isInRange(i, range) {
    const {l,r} = range
    return (i >= l && i <= r)
}

export default Carousel
import React, { Component } from 'react'
import '../../styles/Card.css'

class Card extends Component {

    constructor (props) {
        super(props)
        /*
            props: {
                header: required,
                text: optional,
                link: {
                    ref,
                    label
                },
                style: {...}
                isClickable: default(false)
            }
        */
        this.state = {

        }
    }
    
    render () {
        const {header, text, link, isClickable, style} = this.props;
        return (
            <div className={text ? 'cardBody cardBodyWithText' : 'cardBody cardBodyOnly'} style={style}>
                <div className="cardContent">
                    <p className="cardHeader">{header}</p>
                    {text ? (<p className="cardText">{text}</p>):<></>}
                    {link ? (<a className="cardLink" href={link.ref}>{link.label || link.ref}</a>):<></>}
                </div>
            </div>
        )
    } 
}

export default Card
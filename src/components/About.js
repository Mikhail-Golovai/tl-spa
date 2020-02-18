import React from 'react'
import '../styles/About.css'
import Card from './util/Card'

const LOREM_IPSUM = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
const FACTS_LIST = [
    {
        header: '90',
        text: 'Завершено крупных сделок',
        link: {
            label: 'Все кейсы',
            ref: 'http://google.com'
        }
    },
    {
        header: '91',
        text: 'Завершено крупных сделок',
        link: {
            label: 'Все кейсы',
            ref: 'http://google.com'
        }
    },
    {
        header: '92',
        text: 'Завершено крупных сделок',
        link: {
            label: 'Все кейсы',
            ref: 'http://google.com'
        }
    },
    {
        header: '93',
        text: 'Завершено крупных сделок',
        link: {
            label: 'Все кейсы',
            ref: 'http://google.com'
        }
    }
]

export default function About () {
        const cards = FACTS_LIST.map((srv) => 
        <Card 
            key={srv.header} 
            header={srv.header} 
            text={srv.text}
            link={srv.link}
        />)
        return (
            <div className="sectionContainer aboutContainer">
                <div className="aboutHeader">
                    <p className="sectionHeader ">O нас</p>
                    <p className="sectionTitle">Компания</p>
                    <p className="sectionTitle aboutTitle">ИвановПром</p>
                </div>
                <div className="aboutDescription">
                    <p>{LOREM_IPSUM}</p>
                </div>
                <div className="aboutBody">
                    <div className="cardsContainer cardsContainer-2">
                        {cards}
                    </div>
                </div>
            </div>
        )
}
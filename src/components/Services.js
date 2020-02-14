import React from 'react'
import Card from './util/Card'
import '../styles/Services.css'

const SERVICES_LIST = [
    {
        header: 'Бухгалтерское обслуживание',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание',
        isClickable: true
    },
    {
        header: '90',
        text: 'Завершено крупных сделок',
        isClickable: true
    },
    {
        header: '90',
        text: 'Завершено крупных сделок',
        link: {
            label: 'Все кейсы',
            ref: 'http://google.com'
        },
        isClickable: true
    }
] //TODO: move to store or const file

export default function Services() {
        const cards = SERVICES_LIST.map((srv) => 
        <Card 
            key={srv.header} 
            header={srv.header} 
            isClickable={srv.isClickable}
            text={srv.text}
            link={srv.link}
        />)
        return (
            <div className="sectionContainer">
                <p className="sectionHeader">Наши услуги</p>
                <p className="sectionTitle servicesTitle">Мы специализируемся</p>
                <div className="cardsContainer cardsContainer-3">
                    {cards}
                </div>
            </div>
        )
}
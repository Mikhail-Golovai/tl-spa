import React from 'react'
import Card from './util/Card'
import '../styles/Services.css'

const SERVICES_LIST = [
    {
        header: 'Бухгалтерское обслуживание#1',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание#2',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание#3',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание#4',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание#5',
        isClickable: true
    },
    {
        header: 'Бухгалтерское обслуживание#6',
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
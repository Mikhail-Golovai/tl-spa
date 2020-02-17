import React from 'react'
import BuhOne from '../resources/BuhOne.svg'
import '../styles/Header.css'

const NAV_TABS = [
    {
        title: 'ГЛАВНАЯ',
        href: '#main'
    },
    {
        title: 'УСЛУГИ',
        href: '#services'
    },
    {
        title: 'КЕЙСЫ',
        href: '#cases'
    },
    {
        title: 'О КОМПАНИИ',
        href: '#about'
    },
    {
        title: 'КОНТАКТЫ',
        href: '#contacts'
    },
]

export default function Header () {
    const navLinks = NAV_TABS.map(nav => {
        return (
            <a key={nav.href} href={nav.href}>{nav.title}</a>
        )
    })
    return (
        <header>
            <img className="icon" src={BuhOne}></img>
            <div className="headerMain">
                <div className="headerContacts">
                    <p className="phone">8 (111) 222-33-44</p>
                    <p className="workHours">Пн-Пт 10:00-18:00</p>
                    <p className="email">order@buhone.ru</p>
                    <p className="address">Невский пр. 130</p>
                </div>
                <nav>
                    {navLinks}
                </nav>
            </div>
        </header>
    )
}
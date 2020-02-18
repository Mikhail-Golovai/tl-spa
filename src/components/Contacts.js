import React, {useRef} from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { UpdateFeedbacks } from '../redux/modules/feedbacks'
import {every, values} from 'lodash'
import '../styles/Contacts.css'


export default function Contacts () {

    const fieldsToValidate = useRef([])

    const formData = useSelector((state) => {
        return({
        ...state.feedbacks
    })}, shallowEqual) 
    const dispatch = useDispatch()

    function setFormData(newFormData, changedFields) {dispatch(UpdateFeedbacks({newFormData, changedFields}))}

    function handleChangeFormData(event) {
        const {name, value} = event.target
        if (!fieldsToValidate.current.includes(name)) fieldsToValidate.current.push(name)
        setFormData({
                ...formData.data,
                [name]: value
        }, fieldsToValidate.current)
    }

    function handleSubmit(event) {
        alert(`Вы отправили сообщение!\nname: ${formData.data.name}, soname: ${formData.data.soname}\nmessage: ${formData.data.message}`)
        event.preventDefault()
    }

    const {formValidation, data} = formData
    const validName = formValidation.name.isValid
    const validSoname = formValidation.soname.isValid
    const validMessage = formValidation.message.isValid

    const exceptionNameStyle = validName ? {visibility:'hidden'} : {display:'visible'}
    const exceptionSonameStyle = validSoname ? {visibility:'hidden'} : {display:'visible'}
    const exceptionMessageStyle = validMessage ? {visibility:'hidden'} : {display:'visible'}
    
    return (
        <div className="sectionContainer contactsContainer">
            <div className="contactsHeader">
                <p className="sectionTitle">Связь с нами</p>
            </div>
            <div className="contactsDescription">
                <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
            </div>
            <div className="contacts">
                <div className="phone">
                    <p>+7 (111) 222-33-44</p>
                </div>
                <div className="email">
                    <p>order@bu-one.ru</p>
                </div>
            </div>
            <div className="contactsBody">
                <form className="feedbackForm" onSubmit={handleSubmit}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label name">
                        <input 
                            name="name" 
                            className="mdl-textfield__input" 
                            type="text" 
                            id="feedback_name" 
                            placeholder="Иван" 
                            onChange={handleChangeFormData}
                        />
                        <label className="mdl-textfield__label" htmlFor="feedback_name">Имя</label>
                        <span  className="feedbackError" style={exceptionNameStyle}>{formValidation.name.errorMessage}</span>
                    </div>
                    
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label soname">
                        <input 
                            name="soname" 
                            className="mdl-textfield__input" 
                            type="text" 
                            id="feedback_soname" 
                            placeholder="Иванов" 
                            onChange={handleChangeFormData}
                        />
                        <span style={exceptionSonameStyle} className="feedbackError">{formValidation.soname.errorMessage}</span>
                        <label className="mdl-textfield__label" htmlFor="feedback_soname">Фамилия</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield message">
                        <textarea 
                            name="message" 
                            className="mdl-textfield__input" 
                            type="text" id="feedback_message" 
                            value={data && data.message} 
                            onChange={handleChangeFormData}
                        >
                        </textarea>
                        <span style={exceptionMessageStyle} className="feedbackError">{formValidation.message.errorMessage}</span>
                        <label className="mdl-textfield__label" htmlFor="feedback_message">Сообщение</label>
                    </div>

                    <button
                        disabled={!validName || !validSoname || !validMessage}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored button">
                        Отправить сообщение
                    </button>
                </form>
            </div>
        </div>
    )
}

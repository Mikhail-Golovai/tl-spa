import React, { useState } from 'react'
import {every, values} from 'lodash';
import '../styles/Contacts.css'

export default function Contacts () {
    const [formData, setFormData] = useState({
        data: {
            name: '',
            soname: '',
            message: ''
        },
        formValidation: {
          name: {isValid: false, errorMessage: null},
          soname: {isValid: false, errorMessage: null},
          message: {isValid: false, errorMessage: null}
        },
        buttonEnabled: false
    })

    function handleChangeFormData(event) {
        const {name, value} = event.target
        const nextFormValidation = validateData(name, value);
        const nextFormData = {
            ...formData,
            data: {...formData.data, [name]: value},
            formValidation: nextFormValidation
        };
        console.log('nextFormData :', nextFormData);
        setFormData({
        ...nextFormData,
        buttonEnabled: isValidForm(nextFormData)
        });
    }

    function validateData(type, value) {
        const fields = {
            name: validateName,
            soname: validateSoname,
            message: validateMessage
        }
        return fields[type] ? fields[type](value) : {isValid: true, errorMessage: null}
    }

    function validateName(name) {
        let isValid = true
        let errorMessage = null
    
        if (name.length === 0) {
          isValid = false
          errorMessage = 'Поле не должно быть пустым'
        } else if (name.length > 10) {
          isValid = false
          errorMessage = 'Длина строки больше 10'
        }
    
        return {
          ...formData.formValidation,
          name: {isValid, errorMessage}
        };
    }

    function validateSoname(soname) {
        let isValid = true
        let errorMessage = null
    
        if (soname.length === 0) {
          isValid = false
          errorMessage = 'Поле не должно быть пустым'
        } else if (soname.length > 15) {
          isValid = false
          errorMessage = 'Длина строки больше 15'
        }
    
        return {
          ...formData.formValidation,
          soname: {isValid, errorMessage}
        };
    }

    function validateMessage(message) {
        let isValid = true
        let errorMessage = null
    
        if (message.length === 0) {
          isValid = false
          errorMessage = 'Поле не должно быть пустым'
        } else if (message.length > 50) {
          isValid = false
          errorMessage = 'Длина строки больше 50'
        }
    
        return {
          ...formData.formValidation,
          message: {isValid, errorMessage}
        };
    }

    function isValidForm (nextState) {
        const {formValidation, data} = nextState;
    
        const isValid = every(values(formValidation), {isValid: true}); // проверка что все поля валидны
        const isRequiredFilled = every([data.name], (value) => (!!value)); // проверка, что поле name заполненно, оно обязательное
    
        return isValid && isRequiredFilled;
      };

    function handleSubmit(event) {
        alert(`Вы отправили сообщение!\nname: ${formData.data.name}, soname: ${formData.data.soname}\nmessage: ${formData.data.message}`)
        event.preventDefault()
    }

    const exceptionNameStyle = formData.formValidation.name.isValid ? {visibility:'hidden'} : {display:'visible'}
    const exceptionSonameStyle = formData.formValidation.soname.isValid ? {visibility:'hidden'} : {display:'visible'}
    const exceptionMessageStyle = formData.formValidation.message.isValid ? {visibility:'hidden'} : {display:'visible'}
    console.log('exceptionNameStyle :', exceptionNameStyle);
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
                            is-invalid={!formData.formValidation.name.isValid}
                        />
                        <label className="mdl-textfield__label" for="feedback_name">Имя</label>
                        <span  className="feedbackError" style={exceptionNameStyle}>{formData.formValidation.name.errorMessage}</span>
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
                        <span style={exceptionSonameStyle} className="feedbackError">{formData.formValidation.soname.errorMessage}</span>
                        <label className="mdl-textfield__label" for="feedback_soname">Фамилия</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield message">
                        <textarea 
                            name="message" 
                            className="mdl-textfield__input" 
                            type="text" id="feedback_message" 
                            value={formData.data.message} 
                            onChange={handleChangeFormData}
                        >
                        </textarea>
                        <span style={exceptionMessageStyle} className="feedbackError">{formData.formValidation.message.errorMessage}</span>
                        <label className="mdl-textfield__label" for="feedback_message">Сообщение</label>
                    </div>

                    <button
                        disabled={!formData.buttonEnabled}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored button">
                        Отправить сообщение
                    </button>
                </form>
            </div>
        </div>
    )
}
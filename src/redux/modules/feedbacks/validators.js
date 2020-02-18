const defauldValidation = {
  name: { isValid: true, errorMessage: null},
  soname: { isValid: true, errorMessage: null},
  message: { isValid: true, errorMessage: null}
}

export default function validateData({newFormData, changedFields}){
    const validators = {
      name: validateName,
      soname: validateSoname,
      message: validateMessage,
    }
    const validatedData = changedFields.reduce((acc, type) => {
      acc[type] = validators[type](newFormData[type])
      return acc
    }, {})
    return {
      ...defauldValidation,
      ...validatedData
    }
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
        isValid,
        errorMessage
    }
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
        isValid,
        errorMessage
    }
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
      isValid,
      errorMessage
    }
}
import validateObject from './validateObject'
import validatejs from 'validate.js'

function validate (fieldName, value) {
  var form = {}
  form[fieldName] = value

  formValidation = {}
  formValidation[fieldName] = validationObject[fieldName]
}

export default validate

export const validateNavbar = values => {
    const errors = {}
    if (!values.genres) {
      errors.genres = 'Выберите категорию'
    } 
    if (!values.sort) {
      errors.email = 'Выберите сортировку'
    } 
    if (!values.yaer) {
      errors.age = 'Выберите год'
    } 
    return errors
}

export const validateLogIn = values => {
  const errors = {}
  const requiredFields = [
    'login',
    'password',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}
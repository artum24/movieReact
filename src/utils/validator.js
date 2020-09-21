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

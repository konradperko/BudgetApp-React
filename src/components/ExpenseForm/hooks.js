import { useState, useEffect } from "react"
import { DataService } from '../../services/DataService'

function useFormValidation(initalState, validate) {
  const [values, setValues] = useState(initalState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  const URL = 'https://budget-app-aa.herokuapp.com/expenses'

  useEffect(() => {
    console.log("use effect")
    if(isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if(noErrors) {
        DataService.postData(URL, { ...values }) //
          .then((data) => {
            console.log(data);
            //TODO some confirmation MSG in future
            setSubmitting(false)
          });
      } else {
        setSubmitting(false)
      }
    }
  }, [errors, isSubmitting, values])

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {handleSubmit, handleChange, values, setValues, errors, isSubmitting}
}

export default useFormValidation

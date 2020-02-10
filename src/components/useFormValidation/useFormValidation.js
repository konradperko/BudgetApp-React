import { useState, useEffect } from "react"

function useFormValidation(initalState, validate) {
  const [values, setValues] = useState(initalState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    console.log("use effect")
    if(isSubmitting) {
      console.log(isSubmitting)
      const noErrors = Object.keys(errors).length === 0
      console.log(Object.keys(errors))
      console.log(noErrors)
      if(noErrors) {
        console.log( values.cost, values.category, values.date )
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {handleSubmit, handleChange, handleBlur, values, errors, isSubmitting}
}

export default useFormValidation

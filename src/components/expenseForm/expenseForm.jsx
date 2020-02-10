import React from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import useFormValidation from '../useFormValidation/useFormValidation'
import validateForm from '../validateForm/validateForm'

import { Button, Input } from './Style';

const INITIAL_STATE = {
  cost: '',
  category: "",
  date: new Date()
}

const  ExpenseForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateForm);
 
  const handleDateChange = date => {
    values.date = date
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.cost}
        className={errors.cost && 'error-input'}
        name="cost"
        type="text"
        placeholder="kwota"
      />
      {errors.cost && <p>{errors.cost}</p>}
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.category}
        className={errors.category && 'error-input'}
        name="category"
        type="text"
        placeholder="kategoria"
      />
      {errors.category && <p>{errors.category}</p>}
      <DatePicker
        selected={values.date}
        onChange={handleDateChange}
        
        customInput={<Input name="date"/>}
      />
      {errors.date && <p>{errors.date}</p>}
      <Button disabled={isSubmitting} type="submit">Submit</Button>
    </form>
  )
}

export default ExpenseForm;

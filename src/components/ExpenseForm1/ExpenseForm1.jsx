import React from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import useFormValidation from './hooks'
import ValidateForm from '../ValidateForm/ValidateForm'

import * as Styled from './style';

const INITIAL_STATE = {
  cost: '',
  category: "",
  date: new Date()
}

const  ExpenseForm = () => {
  const { handleSubmit, handleChange, values, setValues, errors, isSubmitting } = useFormValidation(INITIAL_STATE, ValidateForm);

  const handleDateChange = date => {
    setValues({
      ...values,
      date
    })
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input
        onChange={handleChange}
        value={values.cost}
        className={errors.cost && 'error-input'}
        name="cost"
        type="text"
        placeholder="kwota"
      />
      {errors.cost && <p>{errors.cost}</p>}
      <Styled.Input
        onChange={handleChange}
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
        customInput={<Styled.Input name="date"/>}
      />
      {errors.date && <p>{errors.date}</p>}
      <Styled.Button disabled={isSubmitting} type="submit">Submit</Styled.Button>
    </Styled.Form>
  )
}

export default ExpenseForm;

import React, { useState, useEffect } from 'react'
import { DataService } from '../../services/DataService'
import DatePicker from 'react-datepicker'
import { EXPENSES_URL } from '../../static/apiconfig'
import ChooseCategory from '../ChooseCategory/ChooseCategory'

import "react-datepicker/dist/react-datepicker.css"

import * as Styled from './style';

const  ExpenseForm = () => {
  const [cost, setCost] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(new Date())
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    (async function fetchExpenses() {
      if(!isSubmitting) { return }
      try {
        await DataService.postData(EXPENSES_URL, { cost, category, date })
        setSubmitting(false)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [isSubmitting]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleDateChange = date => {
    setDate(date)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input
        onChange={e => setCost(e.target.value)}
        value={cost}
        name="cost"
        type="number"
        placeholder="kwota"
        min="0"
        required
      />
      <Styled.Input
        onChange={e => setCategory(e.target.value)}
        value={category}
        name="category"
        type="text"
        placeholder="kategoria"
        minlength="2"
        required
      />
      <ChooseCategory />
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        required
        name="date"
        customInput={<Styled.Input/>}
      />
      <Styled.Button disabled={isSubmitting} type="submit">Submit</Styled.Button>
    </Styled.Form>
  )
}

export default ExpenseForm;

import React, { useState, useEffect } from 'react'
import { DataService } from '../../services/DataService'
import DatePicker from 'react-datepicker'
import { EXPENSES_URL } from '../../static/apiconfig'
import ChooseCategory from '../ChooseCategory/ChooseCategory'

import "react-datepicker/dist/react-datepicker.css"

import * as Styled from './style';

const  ExpenseForm = () => {
  const [cost, setCost] = useState('')
  const [categoryName, setCategoryName] = useState()
  const [categoryType, setCategoryType] = useState()
  const [subCategory, setSubcategory] = useState('')
  const [date, setDate] = useState(new Date())
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    (async function fetchExpenses() {
      if(!isSubmitting) { return }
      try {
        await DataService.postData(EXPENSES_URL, {
          category: {
            name: categoryName,
            type: categoryType,
          },
          subCategory,
          cost, 
          date })
        setSubmitting(false)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [isSubmitting]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(categoryName)
    console.log(subCategory)
  }, [categoryName, subCategory])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
  }

  function onCategoryChange(name, type) {
    setCategoryType(type)
    setCategoryName(name)
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
      <ChooseCategory
        setSubcategory={setSubcategory}
        onCategoryChange={onCategoryChange}
      />
      <DatePicker
        selected={date}
        onChange={date => setDate(date)}
        required
        name="date"
        customInput={<Styled.Input/>}
      />
      <Styled.Button disabled={isSubmitting} type="submit">Submit</Styled.Button>
    </Styled.Form>
  )
}

export default ExpenseForm;

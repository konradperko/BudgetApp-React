import React, { useState, useEffect } from 'react'
import { DataService } from '../../services/DataService'
import DatePicker from 'react-datepicker'
import { EXPENSES_URL } from '../../static/apiconfig'
import ChooseCategory from '../ChooseCategory/ChooseCategory'
import ChooseSubcategory from '../ChooseSubcategory/ChooseSubcategory'
import { CATEGORIES_URL } from '../../static/apiconfig'

import 'react-datepicker/dist/react-datepicker.css'

import * as Styled from './style'

const ExpenseForm = () => {
  const [cost, setCost] = useState('')
  const [categories, setCategories] = useState()
  const [categoryName, setCategoryName] = useState()
  const [subcategory, setSubcategory] = useState('')
  const [subCategories, setSubCategories] = useState('')
  const [date, setDate] = useState(new Date())
  const [isSubmitting, setSubmitting] = useState(false)
  const categoryType = 'EXPENSES'
  
  useEffect(() => {
    (async function() {
      try {
        await fetch(`${CATEGORIES_URL}?type=${categoryType}`)
          .then(response => response.json())
            .then(data => setCategories(data))
      } catch (e) {
        console.error(e)
      }
    })()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (async function fetchExpenses() {
      if(!isSubmitting) { return }
      try {
        await DataService.postData(EXPENSES_URL, {
          category: {
            name: categoryName,
            type: categoryType,
          },
          subcategory: subcategory.label,
          cost, 
          date })
        setSubmitting(false)
      } catch (e) {
        console.error(e)
      }
    })()
  // eslint-disable-next-line
  }, [isSubmitting])

  useEffect(() => {
    setSubcategory({value: subCategories[0], label: subCategories[0]})
  }, [categoryName])  // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
  }

  function onCategoryChange(name, currentCategoryId) {
    setCategoryName(name)
    setSubCategories(categories && categories.find(x => x._id === currentCategoryId).subcategories.map(item => item))
  }

  function onSubcategoryChange(subcategory) {
    setSubcategory(subcategory)
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
        options={categories}
        onCategoryChange={onCategoryChange}
      />
      {subCategories && <ChooseSubcategory 
        options={subCategories}
        subcategory={subcategory}
        onSubcategoryChange={onSubcategoryChange}
      />}
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

export default ExpenseForm

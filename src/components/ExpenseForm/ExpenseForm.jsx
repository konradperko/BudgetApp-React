import React, { useState, useEffect } from 'react'
import { DataService } from '../../services/DataService'
import DatePicker from 'react-datepicker'
import CustomSelect from './CustomSelect'
import { CATEGORIES_URL, EXPENSES_URL } from '../../static/api.config'

import 'react-datepicker/dist/react-datepicker.css'

import * as Styled from './style'

const ExpenseForm = () => {
  const [cost, setCost] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [subcategory, setSubcategory] = useState('')
  const [subCategories, setSubCategories] = useState([])
  const [date, setDate] = useState(new Date())
  const [isSubmitting, setSubmitting] = useState(false)
  const categoryType = 'EXPENSES'

  useEffect(() => {
    (async function() {
      try {
        const response = await fetch(`${CATEGORIES_URL}?type=${categoryType}`)
        const data = await response.json()
        setCategories(data)
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
  }, [categoryName]) // eslint-disable-line react-hooks/exhaustive-deps

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
      <CustomSelect
        options={categories.map(item => ({ value: item._id, label: item.name }))}
        onCategoryChange={onCategoryChange}
      />
      {subCategories.length > 0 && <CustomSelect
        options={subCategories.map(item => ({ value: item, label: item }))}
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

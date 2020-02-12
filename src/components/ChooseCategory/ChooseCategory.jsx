import React, { useState, useEffect } from 'react'
import { CATEGORIES_URL } from '../../static/apiconfig'

import * as Styled from './style';

const ChooseCategory = () => {
  const [value, setValue] = useState('')
  const [categories, setCategories] = useState([])
  // name, subcategory (tablica stringow), type (EXPENSES, albo EARGNINGS)

  useEffect(() => {
    fetch(CATEGORIES_URL)
      .then(res => setCategories(res))
      console.log(categories)
  }, [])

  return (
    <Styled.Select value={value} onChange={e => setValue(e.target.value)} required>
      <option></option>
      <option>auto</option>
      <option>agd</option>
    </Styled.Select>
  )
}

export default ChooseCategory
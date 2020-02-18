import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { CATEGORIES_URL } from '../../static/apiconfig'

// import * as S from './style';

const ChooseCategory = params => {
  const [categories, setCategories] = useState()
  const [currentCategoryId, setCurrentCategoryId] = useState('')
  const [subCategoriesList, setSubCategoriesList] = useState('')
  const categortType = 'EXPENSES'

  useEffect(() => {
    fetch(`${CATEGORIES_URL}?type=${categortType}`)
    .then(response => response.json())
    .then(data => setCategories( data ))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setSubCategoriesList(categories && categories.find(x => x._id === currentCategoryId).subCategories.map(item => ({ value: item, label: item })))
  }, [currentCategoryId]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleChangeCategory(e) {
    setCurrentCategoryId(e.value)
    params.onCategoryChange(e.label, categortType)
  }

  function handleChangeSubcategory(e) {
    params.setSubcategory(e.value)
  }

  return (
    <>
      <Select
        onChange={handleChangeCategory}
        options={categories && categories.map(item => ({ value: item._id, label: item.name }))}
      />
      {subCategoriesList && 
        <Select
          onChange={handleChangeSubcategory}
          options={subCategoriesList}
        />
      }
    </>
  )
}

export default ChooseCategory
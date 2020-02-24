import React from 'react'

import * as S from './style';

const ChooseSubcategory = params => {
  function handleSubchangeCategory(e) {
    params.onSubcategoryChange(e)
  }

  function handleChangeCategory(e) {
    params.onCategoryChange(e.label, e.value)
  }

  return (
    <S.ReactSelect
      value={params.subcategory ? params.subcategory : undefined}
      name={ params.subcategory && params.subcategory.name ? params.currentCategory : undefined}
      onChange={params.subcategory ? handleSubchangeCategory : handleChangeCategory }
      options={params.options}
    />
  )
}

export default ChooseSubcategory

import React from 'react'

import * as S from './../ChooseCategory/style';

const ChooseSubcategory = params => {
  function handleSubchangeCategory(e) {
    params.onSubcategoryChange(e)
  }

  function setOptions () {
    return params.options.map(item => ({ value: item, label: item }))
  }

  return (
    <S.ReactSelect
      value={params.subcategory}
      name={params.subcategory.name}
      onChange={handleSubchangeCategory}
      options={setOptions()}
    />
  )
}

export default ChooseSubcategory

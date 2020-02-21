import React from 'react'

import * as S from './../ChooseCategory/style';

const ChooseSubcategory = params => {
  function handleSubchangeCategory(e) {
    params.onSubcategoryChange(e)
  }

  return (
    <S.ReactSelect
      value={params.subcategory}
      name={params.subcategory.name}
      onChange={handleSubchangeCategory}
      options={params.options && params.options.map(item => ({ value: item, label: item }))}
    />
  )
}

export default ChooseSubcategory

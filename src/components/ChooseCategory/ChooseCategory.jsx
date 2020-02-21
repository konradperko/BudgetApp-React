import React from 'react'

 import * as S from './style';

const ChooseCategory = params => {
  function handleChangeCategory(e) {
    params.onCategoryChange(e.label, e.value)
  }

  return (
    <S.ReactSelect
      onChange={handleChangeCategory}
      options={params.options && params.options.map(item => ({ value: item._id, label: item.name }))}
    />
  )
}

export default ChooseCategory

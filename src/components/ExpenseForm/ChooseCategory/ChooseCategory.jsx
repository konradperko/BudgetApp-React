import React from 'react'

 import * as S from './style';

const ChooseCategory = params => {
  function handleChangeCategory(e) {
    params.onCategoryChange(e.label, e.value)
  }

  function setOptions() {
    const options = params.options
    return options && options.map(item => ({ value: item._id, label: item.name }))
  }

  return (
    <S.ReactSelect
      onChange={handleChangeCategory}
      options={setOptions()}
    />
  )
}

export default ChooseCategory

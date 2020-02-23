import React, { useState, useEffect } from 'react'
import * as S from './Style'

const Detail = ({value, style}) => {
  const [editMode, setEditMode] = useState(false)

  function handleChangeMode(mode) {
    setEditMode(mode)
  }

  function handleSaveItem(event) {
    if(event.keyCode === 13) {
      handleChangeMode(false)
    }
  }

  return(
  <S.Wrapper as={style}>
      {!editMode ? (
        <S.Text>
            {value}
            <S.Button onClick={() => handleChangeMode(true)}>Edit</S.Button>
        </S.Text>
      ) : (
        <S.EditMode>
          <S.Input defaultValue={value} onKeyDown={handleSaveItem}/>
          <S.Button onClick={() => handleChangeMode(false)}>Save</S.Button>
        </S.EditMode>
      )}
  </S.Wrapper>
  )
}

export default Detail
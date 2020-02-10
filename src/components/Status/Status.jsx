import React from 'react'
import * as S from './Style'

const Status = ({ status, message }) => {
  return (
    <>
      <S.Wrapper>
        {status === 'success' ? <S.SuccessIcon /> : <S.ErrorIcon />}
        <S.Message>{message}</S.Message>
      </S.Wrapper>
    </>
  )


}

export default Status
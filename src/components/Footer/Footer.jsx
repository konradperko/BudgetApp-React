// react
import React from 'react'
// style
import * as S from './Style'

const Footer = () => {
  const year = new Date().getFullYear()

  return(
    <S.Footer>
      <S.Rights>
        copyright by <S.Link href={'#'}>Apps Assembly</S.Link> &copy; {year} 
      </S.Rights>
    </S.Footer>
  )
}

export default Footer
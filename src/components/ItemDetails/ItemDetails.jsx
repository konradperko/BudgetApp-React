import React from 'react'
import * as S from './Style'
import { DETAILS_TYPE } from '../../common/styledType'

const ItemDetails = ({ data, type }) => {
  const { 
    item, 
    details 
  } = DETAILS_TYPE[type]

  const {
    _id,
    cost,
    date,
    category
  } = data
  
  return(
    <S.Item as={item}>
      <S.Details as={details}>{_id}</S.Details>
      <S.Details as={details}>{cost}</S.Details>
      <S.Details as={details}>{date}</S.Details>
      <S.Details as={details}>{category}</S.Details>
    </S.Item>
  )
}

export default ItemDetails
import React from 'react'
import * as S from './Style'
import { DETAILS_TYPE } from '../../common/styledType'
import Detail from './Detail/Detail'

const ItemDetails = ({ data, type }) => {

  const {
    item,
    details,
  } = DETAILS_TYPE[type]

  const {
    _id,
    cost,
    date,
    category,
  } = data


  return(
    <S.Item as={item}>
      <Detail value={_id} style={details} />
      <Detail value={cost} style={details} />
      <Detail value={date} style={details} />
      <Detail value={category ? category.name : ''} style={details} />
    </S.Item>
  )
}

export default ItemDetails
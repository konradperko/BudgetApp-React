import React from 'react'
import * as S from './Style'
import logo from '../../assets/logo192.png'

const Header = ({ }) => {
    return(
        <S.Header>
            <S.Logo src={logo} />
            <S.Title>Budget App</S.Title>
        </S.Header>
    )
}

export default Header
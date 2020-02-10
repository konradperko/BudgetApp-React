import * as React from 'react'
import Layout from './Layout/Layout'
import * as S from '../Style'
const App = () => {
  return (
    <>
      <S.Site>
        <Layout />
      </S.Site>
      <S.GlobalStyles />
    </>
  )
}

export default App
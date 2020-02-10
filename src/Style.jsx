import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Anton|Open+Sans&display=swap');
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

export const Site = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`

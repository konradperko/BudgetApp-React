import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4px;
  position: relative;
`

export const Button = styled.button`
  padding: 8px;
  width: 50px;
  position: absolute;
  font-weight: 600;
  color: #545174;
  background: none;
  border: 0;
  right: 8px;
  top: 8px;
`

export const Text = styled.span`
  padding: 8px 58px 8px 8px;
  display: block;

  ${Button} {
    display: none;
  }
  &:hover ${Button} {
    display: block;
  }
`
export const EditMode = styled.div`
  padding: 0px 58px 0px 8px;
`

export const Input = styled.input`
  padding: 6px 12px;
  height: 38px
`
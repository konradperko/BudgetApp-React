import styled from 'styled-components'
import {ErrorCircle, CheckCircle} from 'styled-icons/boxicons-regular'
export const Wrapper = styled.div`
    text-align: center;
`
export const ErrorIcon = styled(ErrorCircle)`
    width: 150px;
`
export const SuccessIcon = styled(CheckCircle)`
    width: 150px;
`
export const Message = styled.p`
    font-size: 18px;
`
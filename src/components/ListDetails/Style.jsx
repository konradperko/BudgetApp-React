import styled from 'styled-components'

export const Wrapper = styled.div`
    
`
export const Headline = styled.h2`
    
`
export const Table = styled.table`
    width: 100%;
    
  border-collapse: collapse;
`
export const TableHead = styled.thead`
    text-align: left;
    
`
export const TableBody = styled.tbody`
    tr:nth-child(2n+1) {
        background: #CDC2FF;
    }

    tr:first-child {
        box-shadow: inset 0 2px 2px 0 rgba(0,0,0,0.2);
    }
`
export const TableHeadline = styled.th`
    padding: 8px 12px;
`
export const TableRow = styled.tr`
    border-bottom: 1px solid #B09EFF;
`
export const TableCol = styled.td`
    padding: 12px 12px;

`
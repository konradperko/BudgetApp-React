import Select from 'react-select';
import styled from 'styled-components'

export const ReactSelect = styled(Select)`
  width: 100%;
  height: 34px;
  margin-bottom: 10px;
  border: none;
  font-size: 16px;
  color: #545174;
  text-align: center;

  & > div {
    border-radius: 0;
    border: 1px solid #545174;
    min-height: 34px;
  }

  & > div > div {
    justify-content: center;
  }
  
  [class$="-IndicatorsContainer"] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }

  [class$="-indicatorContainer"] {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
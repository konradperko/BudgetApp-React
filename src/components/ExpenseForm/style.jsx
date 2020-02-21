import styled from 'styled-components'

export const Form = styled.form `
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0 auto;

  .react-datepicker-wrapper {
    width: 100%;

    input {
      width: calc(100% - 2px);
      border: 1px solid #545174;
      color: #545174;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #545174;
  color: #545174;
`;

export const Button = styled.button`
  color: #fff;
  cursor: pointer;
  width: 100%;
  margin: 0;
  font-size: 16px;
  padding: 15px 0;
  border: none;
  background: #545174;

  :disabled {
    opacity: .25;
  }
`;

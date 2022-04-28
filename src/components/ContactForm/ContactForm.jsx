import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d4d4d4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Wrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: 0.03em;
  color: #757575;
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  padding: 8px 10px;
  padding-left: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  line-height: 1;
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export const SubmitButton = styled.button`
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #ffffff;
  background-color: #2196f3;
  padding: 10px 20px;
  font-size: 16px;
  letter-spacing: 0.03em;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #188ce8;
  }
`;
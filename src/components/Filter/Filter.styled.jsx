import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 8px 10px;
  padding-left: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export const Text = styled.p`
  margin-bottom: 5px;
  color: #757575;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.03em;
  text-align: center;
`;
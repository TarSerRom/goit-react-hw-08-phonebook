import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin-right: 10px;
  color: #757575;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.03em;
  text-align: center;
`;

export const DeleteBtn = styled.button`
  padding: 2px 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #ffffff;
  background-color: #2196f3;
  font-size: 14px;
  line-height: 1.62;
  letter-spacing: 0.03em;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #188ce8;
  }
`;
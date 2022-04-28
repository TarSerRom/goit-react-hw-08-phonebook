import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  margin-right: 20px;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #ffffff;
  background-color: #2196f3;
  padding: 7px 15px;
  font-size: 16px;
  letter-spacing: 0.03em;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #188ce8;
  }
`;

export const Thumb = styled.div`
  width: 32px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;
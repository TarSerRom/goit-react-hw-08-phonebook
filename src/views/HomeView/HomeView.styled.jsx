import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 25px;
  line-height: 1;
  color: #2196f3;
  letter-spacing: 0.06em;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  color: #757575;
  font-size: 18px;
  line-height: 1.87;
  letter-spacing: 0.03em;
  text-align: center;
`;

export const TryLink = styled(Link)`
  display: block;
  background-color: #2196f3;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #188ce8;
  }
`;
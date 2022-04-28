import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SiteNavLink = styled(NavLink)`
  position: relative;
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 0.75;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #212121;
  text-decoration: none;
  &:hover {
    color: #2196f3;
  }
  &.${props => props.activeClassName} {
    color: #2196f3;
  }
`;
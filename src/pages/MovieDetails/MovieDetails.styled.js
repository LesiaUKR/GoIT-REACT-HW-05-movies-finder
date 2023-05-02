import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddInfoSection = styled.div`
  margin: 20px 0px;
  border-bottom: 1px solid white;
  display: flex;
  gap: 20px;
`;

export const AddInfoName = styled.h3`
  display: inline-block;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const InfoLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 250ms ease-in-out, color 250ms ease-in-out;
  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    color: red;
    transform: scale(1.5);
    cursor: pointer;
  }
`;

export const BackBtn = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 8px 8px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  :hover {
    color: red;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

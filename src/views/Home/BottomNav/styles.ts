import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export const BottomNavWrap = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 5.3rem;
  width: 100vw;
  max-width: 720px;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px 20px 0px 0px;
`;

export const NavItem = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 17px;
    width: 17px;
    margin-bottom: 2px;
  }
  ${fontStyle(10)}
  cursor: pointer;
`;

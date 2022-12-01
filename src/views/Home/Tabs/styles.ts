import styled, { css } from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export const TabsWrapper = styled.ul`
  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  max-width: 720px;
  position: fixed;
  top: 85px;
  background-color: white;
  z-index: 1;
`;

export const TabItem = styled.li`
  flex-shrink: 0;
  flex-grow: 1;
  text-align: center;
`;

export const TabName = styled.div<{ selected?: boolean }>`
  height: 4.3rem;
  ${fontStyle(13)}
  padding: 12px 14px 10px 14px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    `}
`;

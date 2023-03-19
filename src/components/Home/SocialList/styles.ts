import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export const SocialListWrap = styled.div<{ marginTop: number }>`
  display: flex;
  flex-direction: column;
  ${({ marginTop }) => `margin-top: ${marginTop}px`};
`;
export const Header = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const CardListWrap = styled.ul<{ gap: number }>`
  display: flex;
  flex-direction: column;
  ${({ gap }) => `gap: ${gap}px`};
`;

export const Title = styled.span`
  ${fontStyle(17, 'bold')}
`;

import styled, { css } from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export default function Tag({ text }: { text: string }) {
  return <TagWrapper>{text}</TagWrapper>;
}

const TagWrapper = styled.span`
  padding: 3px 8px;
  height: 1.8rem;
  text-align: center;
  ${fontStyle(10)}
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.tag};
  `};
  border-radius: 17px;
`;

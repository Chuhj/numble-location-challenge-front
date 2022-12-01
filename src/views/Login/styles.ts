import styled from 'styled-components';
import { fontStyle } from './../../common/styles/FontStyle';

export const Logo = styled.div`
  padding: 57px 0 67px 0;
  padding-top: 85px;
  margin-top: 57px;
  margin-left: 16px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 51px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SignupButton = styled.div`
  margin-left: auto;
  ${fontStyle(12)}
  cursor: pointer;
`;

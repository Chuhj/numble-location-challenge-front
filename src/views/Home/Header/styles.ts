import styled from 'styled-components';
import { HeaderWrapper, BackButton } from '../../../common/components/HeaderWithBack';

export const HomeHeaderWrapper = styled(HeaderWrapper)`
  justify-content: space-between;
  padding-bottom: 0;
  border: none;
  overflow: hidden;
  z-index: 1;
`;

export const SearchButton = styled(BackButton)`
  height: 17px;
  margin-bottom: 13px;
`;

export const Logo = styled.div`
  margin-bottom: 7px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #584ef1;
`;

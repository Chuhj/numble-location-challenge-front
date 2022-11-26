import styled from 'styled-components';
import { HeaderWrapper, BackButton } from '../../../common/components/HeaderWithBack';

export const HomeHeaderWrapper = styled(HeaderWrapper)`
  justify-content: space-between;
  padding-bottom: 0;
  border: none;
  overflow: hidden;
`;

export const SearchButton = styled(BackButton)`
  height: 17px;
  margin-bottom: 13px;
`;

export const Logo = styled.div`
  margin-bottom: 7px;
`;

import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export const FeedListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 92px;
`;
export const SocialListHeader = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const Title = styled.span`
  ${fontStyle(17, 'bold')}
`;

export const FeedCardList = styled.ul`
  display: flex;
  gap: 12px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

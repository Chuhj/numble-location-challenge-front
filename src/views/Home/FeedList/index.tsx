import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';
import SocialCardList from '../SocialCardList';
import more from '../../../common/styles/assets/more.svg';
import FeedCard from '../FeedCard';

export default function FeedList({ title }: { title: string }) {
  return (
    <FeedListWrap>
      <SocialListHeader>
        <Title>{title}</Title>
        <img src={more} alt="more" />
      </SocialListHeader>
      <FeedCardList>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedCardList>
    </FeedListWrap>
  );
}

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

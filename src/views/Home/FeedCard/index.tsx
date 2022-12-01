import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';
import { Feed } from '../../../api/types';
import Tag from '../Tag';
import location from '../../../common/styles/assets/location.svg';
import date from '../../../common/styles/assets/date.svg';
import people from '../../../common/styles/assets/people.svg';
import time from '../../../common/styles/assets/time.svg';
import likeWhite from '../../../common/styles/assets/like_white.svg';
import { useNavigate } from 'react-router-dom';

export default function FeedCard({ feed }: { feed: Feed }) {
  const navigate = useNavigate();

  return (
    <FeedCardWrap onClick={() => navigate(`/feed/detail/${feed.postId}`)}>
      <Image>
        <img src={feed.thumbnail.imagePath} alt="feedImg" />
        <Like>
          <img src={likeWhite} alt="likeWhite" />
        </Like>
      </Image>
      <FeedContents>{feed.contents}</FeedContents>
    </FeedCardWrap>
  );
}

export const FeedCardWrap = styled.li`
  width: 11.7rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`;

export const Image = styled.div`
  height: 17rem;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  position: relative;
`;

export const Like = styled.button`
  img {
    height: 15px;
    width: 17px;
  }
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 12px;
  padding-right: 9px;
  background: inherit;
  border-radius: 6px;
`;

export const FeedContents = styled.div`
  ${fontStyle(10)}
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

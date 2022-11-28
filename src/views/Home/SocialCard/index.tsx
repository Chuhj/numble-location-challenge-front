import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';
import Tag from '../Tag';
import people from '../../../common/styles/assets/people.svg';
import timeLimit from '../../../common/styles/assets/time_limit.svg';
import likeWhite from '../../../common/styles/assets/like_white.svg';

export default function SocialCard() {
  return (
    <SocialCardWrap>
      <Image>
        <img src="" alt="img" />
        <Like>
          <img src={likeWhite} alt="likeWhite" />
        </Like>
      </Image>
      <CardContents>
        <div>
          <Tag text={'소분류'} />
          <Title>모임 제목</Title>
          <Info>
            <InfoItem>
              <img src={timeLimit} alt="timeLimit" /> 11.1 (화) 모집마감
            </InfoItem>
            <InfoItem>
              <img src={people} width="12px" height="12px" alt="people" />
              5/7
            </InfoItem>
          </Info>
        </div>
        <PeopleList>
          <Profile />
        </PeopleList>
      </CardContents>
    </SocialCardWrap>
  );
}

export const SocialCardWrap = styled.li`
  width: 100%;
  display: flex;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
`;

export const Image = styled.div`
  width: 7.8rem;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 6px 0 0 6px;
  position: relative;
`;

export const Like = styled.button`
  img {
    height: 15px;
    width: 17px;
  }
  background: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 10px;
  padding-bottom: 11px;
  border-radius: 0 0 0 6px;
`;

export const CardContents = styled.div`
  height: 100%;
  width: 25rem;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 12px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  margin-top: 6px;
  ${fontStyle(14, 'bold')}
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  gap: 12px;
  ${fontStyle(10)}
  margin-top: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PeopleList = styled.ul`
  display: flex;
  gap: 3.22px;
  margin-top: 11px;
`;

export const Profile = styled.li`
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
`;

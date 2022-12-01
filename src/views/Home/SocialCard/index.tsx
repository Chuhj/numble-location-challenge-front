import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';
import Tag from '../Tag';
import people from '../../../common/styles/assets/people.svg';
import timeLimit from '../../../common/styles/assets/time_limit.svg';
import likeWhite from '../../../common/styles/assets/like_white.svg';
import { Social } from '../../../api/types';
import { formatDate } from '../../../common/utils/formatDate';

export default function SocialCard({ social }: { social: Social }) {
  const endDate = formatDate(social.endDate);

  return (
    <SocialCardWrap>
      <Image>
        <img src={social.images.length === 0 ? '' : social.images[0].imagePath} alt="img" />
        <Like>
          <img src={likeWhite} alt="likeWhite" />
        </Like>
      </Image>
      <CardContents>
        <div>
          {social.tags.map((tag: any) => (
            <Tag text={tag.tag_name} />
          ))}
          <Title>{social.title}</Title>
          <Info>
            <InfoItem>
              <img src={timeLimit} alt="timeLimit" /> {`${endDate} 모집마감`}
            </InfoItem>
            <InfoItem>
              <img src={people} width="12px" height="12px" alt="people" /> {social.currentNums}/{social.limitedNums}
            </InfoItem>
          </Info>
        </div>
        <PeopleList>
          {social.socialings.map(() => (
            <Profile />
          ))}
        </PeopleList>
      </CardContents>
    </SocialCardWrap>
  );
}

export const SocialCardWrap = styled.li`
  height: 12.1rem;
  width: 100%;
  display: flex;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
`;

export const Image = styled.div`
  width: 7.8rem;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 6px 0 0 6px;
  position: relative;

  img:nth-child(1) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px 0 0 6px;
  }
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

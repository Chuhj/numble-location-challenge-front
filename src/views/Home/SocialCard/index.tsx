import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';
import Tag from '../Tag';
import location from '../../../common/styles/assets/location.svg';
import date from '../../../common/styles/assets/date.svg';
import people from '../../../common/styles/assets/people.svg';
import time from '../../../common/styles/assets/time.svg';
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
          <Tag text="소분류" />
          <Title>모임 제목</Title>
          <Info>
            <InfoCol>
              <InfoItem>
                <img src={location} alt="location" /> OO구 OO동
              </InfoItem>
              <InfoItem>
                <img src={people} width="12px" height="12px" alt="location" /> 5/7
              </InfoItem>
            </InfoCol>
            <InfoCol>
              <InfoItem>
                <img src={date} alt="location" /> 11.6(일)
              </InfoItem>
              <InfoItem>
                <img src={time} alt="location" /> 오전 9:00
              </InfoItem>
            </InfoCol>
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
  height: 13.8rem;
  width: 100%;
  display: flex;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
`;

export const Image = styled.div`
  height: 100%;
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
`;

export const Info = styled.div`
  display: flex;
  gap: 14px;
  ${fontStyle(10)}
  margin-top: 10px;
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  img {
    margin-top: 2px;
  }
`;

export const PeopleList = styled.ul`
  display: flex;
  gap: 3.87px;
`;

export const Profile = styled.li`
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
`;

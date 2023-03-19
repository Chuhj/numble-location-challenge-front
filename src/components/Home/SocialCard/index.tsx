import { Social } from '../../../api/types';
import Tag from '../Tag';
import people from '../../../common/styles/assets/people.svg';
import timeLimit from '../../../common/styles/assets/time_limit.svg';
import likeWhite from '../../../common/styles/assets/like_white.svg';
import { formatDate } from '../../../common/utils/formatDate';
import { SocialCardWrap, Image, Like, CardContents, Title, Info, InfoItem, PeopleList, Profile } from './styles';

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

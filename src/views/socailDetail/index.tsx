import { GrCalendar, GrLocation } from 'react-icons/gr'
import {
  IoCalendarOutline,
  IoChatbubbleEllipsesOutline,
  IoHeartOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTimeOutline,
} from 'react-icons/io5'
import Header from '../../common/components/Header'
import Tag from '../../common/components/Tag'
import { Option, TagList } from '../social/components/SocialCard'
import {
  Content,
  ExtraInfo,
  InfoList,
  JoinBar,
  JoinBtn,
  LikeBtn,
  Member,
  OptionList,
  SocialDetailWrap,
  Title,
} from './socialDetail.styled'

export default function SocialDetail() {
  return (
    <SocialDetailWrap>
      <TagList>
        <Tag name="대분류" />
        <Tag name="소분류" />
      </TagList>
      <Title>모임 제목</Title>
      <OptionList>
        <Option>
          <GrLocation size={16} />
          {'지역'}
        </Option>
        <Option>
          <GrCalendar size={16} />
          {`11.7(sun)`}
        </Option>
        <Option>
          <IoTimeOutline size={16} />
          오전 9:00
        </Option>
      </OptionList>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam minima adipisci voluptatibus vitae eum quibusdam
        quae vel dicta recusandae, quas repudiandae ipsum perferendis a veniam amet dignissimos magni non. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quam lit. Quam aliquam minima adipisci voluptatibus vitae eum quibusdam quae vel dicta
        recusandae, quas repudiandae ipsum perferendis a e ipsum perferendis a veniam amet dignissimos magni non. Lorem ipsum
        dolor sit amet consadipisicing elit.erfereveniam amet dignissimos magni non.
      </Content>
      <ExtraInfo>
        <Title>모임 상세 정보</Title>
        <InfoList>
          <Option>
            <IoTimeOutline size={16} />
            11.1 (화) 모집 마감
          </Option>
          <Option>
            <IoLocationOutline size={16} />
            OO카페 (서울 OO구 OO동 111-11)
          </Option>
          <Option>
            <IoCalendarOutline size={16} />
            11.6 (일)
          </Option>
          <Option>
            <IoTimeOutline size={16} />
            오전 9:00
          </Option>
          <Option>
            <IoPeopleOutline size={16} />
            3/10명
          </Option>
          <Option>
            <IoChatbubbleEllipsesOutline size={16} />
            오전 9:00
          </Option>
        </InfoList>
      </ExtraInfo>
      <ExtraInfo>
        <Title>모임 멤버</Title>
        <InfoList>
          <Member>
            <img src="https://api.surfit.io/v1/category/content-cover/develop/react/2x" alt="member-img" />
            <span>닉네임</span>
          </Member>
          <Member>
            <img src="https://api.surfit.io/v1/category/content-cover/develop/react/2x" alt="member-img" />
            <span>닉네임</span>
          </Member>
          <Member>
            <img src="https://api.surfit.io/v1/category/content-cover/develop/react/2x" alt="member-img" />
            <span>닉네임</span>
          </Member>
        </InfoList>
      </ExtraInfo>
      <JoinBar>
        <LikeBtn>
          <IoHeartOutline size={20} stroke={'#584EF1'} />
        </LikeBtn>
        <JoinBtn>모임 가입하기</JoinBtn>
      </JoinBar>
    </SocialDetailWrap>
  )
}

import { format } from 'date-fns'
import { GrCalendar, GrLocation } from 'react-icons/gr'
import {
  IoCalendarOutline,
  IoChatbubbleEllipsesOutline,
  IoHeartOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTimeOutline,
} from 'react-icons/io5'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { makeGet } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Tag from '../../common/components/Tag'
import { Category } from '../Search'
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
  const { id } = useParams<{ id: string }>()
  const { data } = useQuery(`socialDetail/${id}`, () => makeGet(`/social/${id}`))

  return (
    <SocialDetailWrap>
      <Header tabName="모임 상세" isBack />
      <TagList>
        <Tag name={data?.category?.name} />
      </TagList>
      <Title>{data?.title}</Title>
      <OptionList>
        <Option>
          <GrLocation size={16} />
          {data?.dongName.length > 6 ? data?.dongName.slice(0, 6) + '...' : data?.dongName}
        </Option>
        <Option>
          <GrCalendar size={16} />
          {data && format(new Date(data?.startDate), 'MM-dd')}
        </Option>
        {/* <Option>
          <IoTimeOutline size={16} />
          {data && format(new Date(data?.startDate), 'HH:mm')}
        </Option> */}
      </OptionList>
      <Content>{data?.contents}</Content>
      <ExtraInfo>
        <Title>모임 상세 정보</Title>
        <InfoList>
          <Option>
            <IoTimeOutline size={16} />
            {data && format(new Date(data?.endDate), 'yyyy-MM-dd')} 모집 마감
          </Option>
          <Option>
            <IoLocationOutline size={16} />
            {data?.dongName}
          </Option>
          <Option>
            <IoPeopleOutline size={16} />
            {data?.currentNums}/{data?.limitedNums}명
          </Option>
          {/* <Option>
            <IoChatbubbleEllipsesOutline size={16} />
            오전 9:00
          </Option> */}
        </InfoList>
      </ExtraInfo>
      <ExtraInfo>
        <Title>모임 멤버</Title>
        <InfoList>
          {data?.socialings?.map((u: any) => (
            <Member>
              <img src="https://api.surfit.io/v1/category/content-cover/develop/react/2x" alt="member-img" />
              <span>{u?.userId}</span>
            </Member>
          ))}
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

import { format } from 'date-fns'
import Swal from 'sweetalert2'
import { GrCalendar, GrLocation } from 'react-icons/gr'
import { IoCallOutline, IoHeartOutline, IoLocationOutline, IoPeopleOutline, IoTimeOutline } from 'react-icons/io5'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { queryClient } from '../../api/config/queryClient'
import { makeDelete, makeGet, makePost } from '../../api/makeRequest'
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
  const { id } = useParams<{ id: string }>()
  const { data } = useQuery(`socialDetail/${id}`, () => makeGet(`/social/${id}`))
  const userId = localStorage.getItem('userId')

  const isLimit = data?.limitedNums === data?.currentNums || data.user.id === Number(userId)
  const isJoin = data?.socialings.some((person: any) => person.userId === Number(userId))

  const { mutate: join } = useMutation((body: any) => makePost({ endpoint: `/socialing/${id}` }), {
    onSuccess: () => {
      queryClient.invalidateQueries(`socialDetail/${id}`)
      Swal.fire('모임에 참가신청을 했습니다.')
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '모임에 참가신청을 실패했습니다. 다시 시도해주세요.',
      })
    },
  })

  const { mutate: cancel } = useMutation(() => makeDelete(`/socialing/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(`socialDetail/${id}`)
      Swal.fire('모임 참가를 취소했습니다.')
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '참가 취소를 실패했습니다. 다시 시도해주세요.',
      })
    },
  })

  const onJoin = () => (isJoin ? cancel() : join(''))

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
          {data?.dongName.length > 6 ? data?.dongName.slice(0, 10) + '...' : data?.dongName}
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
      <Content>
        <img src={data?.images[0]?.imagePath} alt={'사진'} />
        {data?.contents}
      </Content>
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
          <Option>
            <IoCallOutline size={16} />
            {data?.contact}
          </Option>
        </InfoList>
      </ExtraInfo>
      <ExtraInfo>
        <Title>모임 멤버</Title>
        <InfoList>
          {data?.socialings?.map((u: any) => (
            <Member key={u?.userId}>
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
        <JoinBtn isJoin={isJoin} onClick={onJoin} disabled={isLimit}>
          {isJoin ? '참가 취소하기' : isLimit ? '이미 마감된 모임입니다.' : '모임 신청하기'}
        </JoinBtn>
      </JoinBar>
    </SocialDetailWrap>
  )
}

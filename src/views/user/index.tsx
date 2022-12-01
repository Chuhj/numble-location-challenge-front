import { useQuery } from 'react-query'
import { makeGet } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Nav from '../../common/components/Nav'
import { Post, PostList, Profile, ProfileWrap, Title, UserWrap } from './user.styled'
import { useNavigate } from 'react-router-dom'
import Tag from '../../common/components/Tag'

export default function User() {
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')
  const { data } = useQuery(`myinfo/${userId}`, () => makeGet(`/users/${userId}`))
  const { data: socialData } = useQuery(`social/join`, () => makeGet(`social/join`))

  return (
    <>
      <UserWrap>
        <Header tabName="프로필" isBack />
        <ProfileWrap>
          <Profile />
          <div>
            <div style={{ display: 'flex', height: '20px', alignItems: 'center', gap: '9px' }}>
              <strong>{data?.nickname || '넘블'}</strong>
              <Tag name={data?.dongName || '넘블시 넘블동'} />
            </div>
            <p>{data?.bio || '저는 넘블에서 왔습니다.'}</p>
          </div>
        </ProfileWrap>
        <Title>내가 참여한 모임</Title>
        <PostList>
          {socialData &&
            socialData?.map((social: any) => (
              <Post onClick={() => navigate(`/social/detail/${social?.id}`)}>
                <span>{social?.category?.name}</span>
                <p>{social?.title}</p>
              </Post>
            ))}
        </PostList>
        <Nav curr={'my'} />
      </UserWrap>
    </>
  )
}

import { useMutation, useQuery } from 'react-query'
import Swal from 'sweetalert2'
import { makeDelete, makeGet } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Nav from '../../common/components/Nav'
import { Post, PostList, DeleteBtn, PostListWrap, Profile, ProfileWrap, Title, UserWrap } from './user.styled'
import { useNavigate } from 'react-router-dom'
import Tag from '../../common/components/Tag'
import { queryClient } from '../../api/config/queryClient'

export default function User() {
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')
  const { data } = useQuery(`myinfo/${userId}`, () => makeGet(`/users/${userId}`))
  const { data: socialData } = useQuery(`social/join`, () => makeGet(`/social/join`))
  const { data: myWriteSocialData } = useQuery(`social/me`, () => makeGet(`/social/me`))

  const { mutate } = useMutation((id) => makeDelete(`/social/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('social')
      queryClient.invalidateQueries('social/me')
      Swal.fire('모임이 삭제되었습니다.')
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '모임을 삭제에 실패했습니다.',
      })
    },
  })

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
        <PostListWrap>
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
          <Title>내가 만든 모임</Title>
          <PostList>
            {myWriteSocialData &&
              myWriteSocialData?.map((social: any) => (
                <Post onClick={() => navigate(`/social/detail/${social?.id}`)}>
                  <span>{social?.category?.name}</span>
                  <p>{social?.title}</p>
                  <DeleteBtn
                    onClick={(e) => {
                      e.stopPropagation()
                      mutate(social?.id)
                    }}
                  >
                    모임 삭제
                  </DeleteBtn>
                </Post>
              ))}
          </PostList>
        </PostListWrap>
        <Nav curr={'my'} />
      </UserWrap>
    </>
  )
}

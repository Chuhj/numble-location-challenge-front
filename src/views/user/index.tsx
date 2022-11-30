import { useQuery } from 'react-query'
import { makeGet } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Nav from '../../common/components/Nav'
import { Post, PostList, Profile, ProfileWrap, UserWrap } from './user.styled'
import { useNavigate } from 'react-router-dom'
import Tag from '../../common/components/Tag'

export default function User() {
  const navigate = useNavigate()

  return (
    <>
      <UserWrap>
        <Header tabName="프로필" isBack />
        <ProfileWrap>
          <Profile />
          <div>
            <div style={{ display: 'flex', height: '20px', alignItems: 'center', gap: '9px' }}>
              <strong>이름</strong>
              <Tag name="넘블시 상곡동" />
            </div>
            <p>~입니다.</p>
          </div>
        </ProfileWrap>
        <PostList>
          <Post>
            <span>fdf</span>
            <p>dff</p>
          </Post>
        </PostList>
        <Nav curr={'my'} />
      </UserWrap>
    </>
  )
}

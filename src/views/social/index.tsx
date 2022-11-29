import { useQuery } from 'react-query'
import { makeGet } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Nav from '../../common/components/Nav'
import SocialCard from './components/SocialCard'
import { AddSocialBtn, SocialContent, SocialList, SocialTitle, SocialWrap } from './social.styled'
import { IoAddOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function Social() {
  const navigate = useNavigate()

  const { data } = useQuery('socials', () => makeGet('/social'))

  return (
    <>
      <SocialWrap>
        <AddSocialBtn onClick={() => navigate('/social/create')}>
          <IoAddOutline size={22} />
        </AddSocialBtn>
        <Header tabName="모임" />
        <SocialContent>
          <SocialTitle>참여중인 모임</SocialTitle>
          <SocialList>
            {data?.map((data: any) => (
              <SocialCard key={data.id} data={data} />
            ))}
          </SocialList>
        </SocialContent>
        <Nav />
      </SocialWrap>
    </>
  )
}

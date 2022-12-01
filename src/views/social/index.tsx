import { useQuery } from 'react-query'
import { makeGet } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Nav from '../../common/components/Nav'
import SocialCard from './components/SocialCard'
import { SocialContent, SocialList, SocialTitle, SocialWrap } from './social.styled'
import { useNavigate } from 'react-router-dom'

export default function Social() {
  const navigate = useNavigate()

  const { data } = useQuery('social', () => makeGet('/social'))

  return (
    <>
      <SocialWrap>
        <Header tabName="모임" isAdd isAddFunc={() => navigate('/social/create')} />
        <SocialContent>
          <SocialTitle>참여중인 모임</SocialTitle>
          <SocialList>
            {data?.map((data: any) => (
              <SocialCard key={data.id} data={data} />
            ))}
          </SocialList>
        </SocialContent>
        <Nav curr={'social'} />
      </SocialWrap>
    </>
  )
}

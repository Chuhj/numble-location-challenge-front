import styled from 'styled-components'
import Tag from '../../../common/components/Tag'
import { GrLocation, GrCalendar } from 'react-icons/gr'
import { IoPeopleOutline, IoTimeOutline } from 'react-icons/io5'
import format from 'date-fns/format'
import { useNavigate } from 'react-router-dom'

export default function SocialCard({ data }: { data: any }) {
  const navigate = useNavigate()

  return (
    <SocialCardWrap onClick={() => navigate(`/social/detail/${data.id}`)}>
      <img src={data.images[0].imagePath} alt="social-img" />
      <CardContent>
        <TagList>
          <Tag name="대분류" />
          <Tag name="소분류" />
        </TagList>
        <strong>{data.title}</strong>
        <OptionList>
          <Option>
            <GrLocation size={16} />
            {'지역'}
          </Option>
          <Option>
            <GrCalendar size={16} />
            {format(new Date(data.endDate), 'MM.dd (E)')}
          </Option>
          <Option>
            <IoPeopleOutline size={16} />
            {data.currentNums} / {data.limitedNums}
          </Option>
          <Option>
            <IoTimeOutline size={16} />
            오전 9:00
          </Option>
        </OptionList>
      </CardContent>
    </SocialCardWrap>
  )
}

const SocialCardWrap = styled.li`
  width: 100%;
  height: 185px;

  img {
    width: 100%;
    height: 76px;
    object-fit: cover;
    border-radius: 8px;
  }
  border-radius: 8px;
`

const CardContent = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 16px;

  strong {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #242424;
  }
`

export const TagList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  margin-bottom: 8px;
`

export const Option = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin-right: 4px;
  }
  font-size: 10px;
  line-height: 14px;
  color: #242424;
`

const OptionList = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

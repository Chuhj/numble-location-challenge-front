import styled from 'styled-components'

export default function Tag({ name }: { name: string }) {
  return <TagWrap>{name}</TagWrap>
}

export const TagWrap = styled.span`
  padding: 3px 8px;
  background: #f2f2f2;
  border-radius: 17px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #584ef1;
`

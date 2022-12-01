import styled from 'styled-components'

export default function Tag({ name, handler, isSelect }: { name: string; handler?: () => void; isSelect?: boolean }) {
  return (
    <TagWrap onClick={handler} isSelect={isSelect}>
      {name}
    </TagWrap>
  )
}

export const TagWrap = styled.span<{ isSelect?: boolean }>`
  padding: 3px 8px;
  background: #f2f2f2;
  border-radius: 17px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  cursor: pointer;

  ${({ isSelect }) => (isSelect ? `border: 2px solid #584EF1; color:#584EF1 !important;` : `border:none; color: #7B7B7B;`)}
`

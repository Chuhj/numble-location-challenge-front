import styled from 'styled-components'

export default function Nav() {
  return <NavWrap></NavWrap>
}

const NavWrap = styled.nav`
  width: 100%;
  height: 53px;
  border-top: 1px solid #f2f2f2;
  position: fixed;
  bottom: 0;
  max-width: 720px;
  background-color: white;
`

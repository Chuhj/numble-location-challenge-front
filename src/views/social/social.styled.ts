import styled from 'styled-components'

export const SocialWrap = styled.div`
  height: 100vh;
  padding: 85px 0 53px 0;
  position: relative;
`

export const SocialContent = styled.div`
  padding: 18px 16px;
`

export const SocialTitle = styled.h1`
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  margin-bottom: 12px;
`

export const SocialList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
  flex-flow: column;
`

export const AddSocialBtn = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  background-color: white;
  top: 44px;
  right: 15px;
  z-index: 20;
`

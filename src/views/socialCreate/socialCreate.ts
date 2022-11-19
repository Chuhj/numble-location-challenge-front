import styled from 'styled-components'

export const SocialCrateWrap = styled.main`
  height: 100vh;
  padding: 121px 16px 0 16px;
  display: flex;
  flex-flow: column;
`

export const Title = styled.strong`
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #242424;
  margin-bottom: 30px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #242424;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  padding: 0 3px 18px 3px;
`

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  span {
    font-size: 12px;
    line-height: 17px;
    text-align: right;
    margin-top: 9px;
  }
`

export const StepBtn = styled.div`
  position: fixed;
  transform: translateX(-15px);
  bottom: 0;
  width: 100%;
  max-width: 720px;
  height: 53px;
  background: #584ef1;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:disabled {
    background: #cfccff;
  }
`

export const ContentInput = styled.textarea`
  width: 100%;
  height: 335px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  padding: 18px;
  margin-top: 20px;
`

export const FileInput = styled.input`
  position: relative;
  width: 100%;
  height: 96px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  max-width: 688px;
  &::after {
    content: '사진을 업로드 해주세요.';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 96px;
    background-color: white;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #bdbdbd;
  }
`

export const TabItem = styled.div`
  margin-bottom: 24px;
  strong {
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 18px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      background: #f5f4ff;
      width: 88px;
      height: 31px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      line-height: 19px;
      color: #7b7b7b;
    }
  }
`

import styled from 'styled-components'

export const UserWrap = styled.div`
  height: 100vh;
  padding: 85px 0 53px 0;
  position: relative;
`

export const ProfileWrap = styled.div`
  width: 100%;
  height: 170px;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  span {
    color: #584ef1;
  }

  strong {
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
  }

  p {
    font-size: 13px;
    line-height: 19px;
    margin-top: 10px;
    display: block;
  }
`

export const Profile = styled.div`
  width: 80px;
  height: 80px;
  background: #d9d9d9;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 50%;
`

export const PostList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Post = styled.li`
  cursor: pointer;
  width: 100%;
  height: 75px;
  padding: 18px 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid #f2f2f2;

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #7b7b7b;
  }

  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`

export const Title = styled.strong`
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
`

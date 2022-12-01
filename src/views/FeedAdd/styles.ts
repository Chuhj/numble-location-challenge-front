import styled from 'styled-components';
import { fontStyle } from '../../common/styles/FontStyle';

export const Count = styled.div`
  margin-top: 10px;
  margin-left: auto;
  ${fontStyle(12)}

  span:nth-child(2) {
    color: #bdbdbd;
  }
`;

export const FeedAddWrap = styled.div`
  margin-top: 107px;
  input[type='file'] {
    display: none;
  }
`;

export const ImgInput = styled.div`
  width: 68px;
  height: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const ImgArea = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  span {
    margin-left: 17px;
    ${fontStyle(12)}
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const SocialInput = styled.div`
  width: 97px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fontStyle(10)}
  color: #7B7B7B;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  gap: 5px;
  margin-top: 14px;

  img {
    margin-top: 4px;
  }
`;

export const PreviewImg = styled.img`
  width: 68px;
  height: 63px;
  background: #d9d9d9;
  border-radius: 5px;
  position: relative;
`;

export const DeleteButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #242424;
  position: absolute;
  img {
    filter: invert(100%);
    width: 9px;
    height: 9px;
  }
  transform: translate(-50%, -20%);
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #f2f2f2;
  margin: 15px 0 14px 0;
`;

export const FeedContents = styled.textarea`
  height: 368px;
  font-family: Noto Sans, sans-serif;
  ${fontStyle(13)}
  // border: none;
  resize: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;

import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export const FeedCardWrap = styled.li`
  width: 11.7rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`;

export const Image = styled.div`
  height: 17rem;
  position: relative;
  img:nth-child(1) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const Like = styled.button`
  img {
    height: 15px;
    width: 17px;
  }
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 12px;
  padding-right: 9px;
  background: inherit;
  border-radius: 6px;
`;

export const FeedContents = styled.div`
  ${fontStyle(10)}
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

import styled, { css } from 'styled-components';

export const CarouselWrap = styled.div`
  height: 36rem;
  width: 36rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 36rem;
  width: 36rem;
  background: white;
  object-fit: contain;
`;

export const Dots = styled.div`
  height: fit-content;
  display: flex;
  gap: 6px;
  position: absolute;
  right: 50%;
  bottom: 5%;
  transform: translateX(50%);
`;

export const Dot = styled.div<{ current?: boolean }>`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: black;
  ${({ current }) =>
    !current &&
    css`
      opacity: 20%;
    `}
`;

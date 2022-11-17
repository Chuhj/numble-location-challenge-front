import { css } from 'styled-components';

const fontStyle19 = css`
  font-size: 1.9rem;
  line-height: 2.8rem;
`;

const fontStyle17 = css`
  font-size: 1.7rem;
  line-height: 25px;
`;

const fontStyle16 = css`
  font-size: 1.6rem;
  line-height: 2rem;
`;

const fontStyle14 = css`
  font-size: 1.4rem;
  line-height: 2rem;
`;

const fontStyle13 = css`
  font-size: 1.3rem;
  line-height: 1.9rem;
`;

const fontStyle12 = css`
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

const fontStyle10 = css`
  font-size: 1rem;
  line-height: 1.4rem;
`;

type SizeType = 19 | 17 | 16 | 14 | 13 | 12 | 10;

type ColorType = 'white' | 'black' | 'placeholder';

const getFontStyle = (fontSize: SizeType) => {
  if (fontSize === 19) return fontStyle19;
  if (fontSize === 17) return fontStyle17;
  if (fontSize === 16) return fontStyle16;
  if (fontSize === 14) return fontStyle14;
  if (fontSize === 13) return fontStyle13;
  if (fontSize === 12) return fontStyle12;
  if (fontSize === 10) return fontStyle10;
};

const getColor = (color?: ColorType) => css`
  color: ${color || 'black'};
`;

export const fontStyle = (fontSize: SizeType, bold?: 'bold', color?: ColorType) => css`
  ${getFontStyle(fontSize)}
  ${getColor(color)}
  ${bold
    ? css`
        font-weight: 700;
      `
    : css`
        font-weight: 400;
      `}
`;

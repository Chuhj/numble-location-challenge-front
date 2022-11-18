import styled from 'styled-components';
import Button from '../../common/components/Button';
import { fontStyle } from '../../common/styles/FontStyle';

export const SignupWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled(Button)`
  position: fixed;
  bottom: 0;
`;

export const Info = styled.div`
  ${fontStyle(19)}
  padding: 66px 0 53px 0;
`;

export const Label = styled.label`
  ${fontStyle(12)}
`;

export const Input = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 17px 0 18px 5px;
  margin-bottom: 32px;
  background: inherit;
  ${fontStyle(17, 'bold')}
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

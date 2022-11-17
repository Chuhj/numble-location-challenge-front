import styled, { css } from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
  size?: 'large' | 'mid';
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, size = 'large', disabled = false, onClick, ...props }: ButtonProps) {
  return (
    <ButtonWrapper size={size} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<ButtonProps>`
  width: 100%;
  ${({ size }) => {
    if (size === 'large')
      return css`
        height: 5.3rem;
      `;
    if (size === 'mid')
      return css`
        height: 4rem;
        border-radius: 10px;
      `;
  }}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.disabled : theme.colors.primary)};
  border: none;
  cursor: pointer;
`;

import React, { memo, ReactNode } from 'react';

import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  width?: number;
  height?: number;
  variant?: 'white' | 'purple' | 'longPurple' | 'longWhite';
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyledProps {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button<ButtonStyledProps>`
  ${({ width = 156, height = 44 }) => css`
    width: ${width}px;
    height: ${height}px;
  `}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  ${({ theme }) => theme.textStyle.regular[1420]};

  ${({ variant = 'white', theme }) => {
    switch (variant) {
      case 'white':
        return css`
          color: ${theme.palette.mainColor};
          border: 1px solid ${theme.palette.mainColor};
        `;

      case 'purple':
        return css`
          color: white;
          background: ${theme.palette.mainColor};
        `;
      case 'longPurple':
        return css`
          width: 272px;
          color: white;
          background: ${theme.palette.mainColor};
        `;
      case 'longWhite':
        return css`
          width: 272px;
          color: ${theme.palette.mainColor};
          border: 1px solid ${theme.palette.mainColor};
        `;
    }
  }}

  &:disabled {
    background: ${({ theme }) => theme.palette.error};
    cursor: not-allowed;
  }
`;

export default memo(Button);

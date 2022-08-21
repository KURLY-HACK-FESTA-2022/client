import React, { memo, ReactNode } from 'react';
import { palette, PaletteKeyTypes } from 'libs/styles/palette';

import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  width?: number;
  height?: number;
  variant?: 'white' | 'purple';
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

  ${({ variant = 'white' }) => {
    switch (variant) {
      case 'white':
        return css`
          color: ${palette.mainColor};
          border: 1px solid ${palette.mainColor};
        `;

      case 'purple':
        return css`
          color: white;
          background: ${palette.mainColor};
        `;
    }
  }}

  &:disabled {
    background: ${palette.error};
    cursor: not-allowed;
  }
`;

export default memo(Button);

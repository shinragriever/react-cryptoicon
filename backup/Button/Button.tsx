import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, backgroundColor, color, style } = props;

  let _style: React.CSSProperties = style || {};

  /** Override Defaults */

  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;
  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};

export default Button;
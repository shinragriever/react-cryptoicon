import * as React from 'react';
import { SVGProps } from 'react';
const VibIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 32 32" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} fill="#ff1f43" r={16} />
      <path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff" />
    </g>
  </svg>
);
export default VibIcon;

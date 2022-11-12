import * as React from 'react';
import { SVGProps } from 'react';
const MtlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#1E1F25" />
      <path fill="#FFF" d="M8 9h1v14H8V9zm5 3h1v9h-1v-9zm5 2h1v5h-1v-5zm5-5h1v14h-1V9z" />
    </g>
  </svg>
);
export default MtlIcon;

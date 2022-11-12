import * as React from 'react';
import { SVGProps } from 'react';
const ApexIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#1F4C9F" />
      <path fill="#FFF" d="M6 19.25 16 6.5l10 12.75v4.25L16 10.75 6 23.5v-4.25zm10.5 1.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </g>
  </svg>
);
export default ApexIcon;

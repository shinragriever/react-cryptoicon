import { SVGProps } from 'react';
const LrcIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#2ab6f6" r={16} />
      <path d="m16 6 9 12.533L16 26l-9-7.467zm-1.174 6.667L10.913 18l3.913 3.2zm2.348 0V21.2l3.913-3.2z" fill="#fff" />
    </g>
  </svg>
);
export default LrcIcon;

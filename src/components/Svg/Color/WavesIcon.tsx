import { SVGProps } from 'react';
const WavesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#0155ff" r={16} />
      <path d="m16 6 10 10-10 10L6 16z" fill="#fff" />
    </g>
  </svg>
);
export default WavesIcon;

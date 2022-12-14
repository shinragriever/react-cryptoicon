import { SVGProps } from 'react';
const GoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#F1B32B" />
      <path
        d="M15.75 4C9.26 4 4 9.26 4 15.75S9.26 27.5 15.75 27.5 27.5 22.24 27.5 15.75A11.75 11.75 0 0 0 15.75 4zm0 20.57a8.82 8.82 0 1 1 0-17.64 8.82 8.82 0 0 1 0 17.64zm-2.93-8.81 2.94 4.4 2.92-4.4-2.92-4.41-2.94 4.41z"
        fill="#FFF"
      />
    </g>
  </svg>
);
export default GoldIcon;

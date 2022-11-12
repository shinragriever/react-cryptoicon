import { SVGProps } from 'react';
const DotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <circle fill="#E6007A" cx={16} cy={16} r={16} />
      <path
        d="M16.272 6.625c-3.707 0-6.736 3.012-6.736 6.736 0 .749.124 1.48.356 2.192a.95.95 0 0 0 1.194.589.95.95 0 0 0 .588-1.194 4.745 4.745 0 0 1-.267-1.73c.071-2.512 2.103-4.58 4.616-4.704a4.86 4.86 0 0 1 5.115 4.847 4.862 4.862 0 0 1-4.58 4.848s-.945.053-1.408.125c-.232.035-.41.071-.535.089-.054.018-.107-.036-.09-.09l.161-.783.873-4.028a.934.934 0 0 0-.712-1.105.934.934 0 0 0-1.105.713s-2.103 9.802-2.121 9.909a.934.934 0 0 0 .713 1.105.934.934 0 0 0 1.105-.713c.017-.107.303-1.408.303-1.408a2.367 2.367 0 0 1 1.996-1.854 21.43 21.43 0 0 1 1.051-.089 6.744 6.744 0 0 0 6.22-6.719c0-3.724-3.03-6.736-6.737-6.736zm.481 15.505a1.122 1.122 0 0 0-1.336.873c-.125.606.25 1.212.873 1.337a1.122 1.122 0 0 0 1.337-.874c.124-.623-.25-1.212-.874-1.336z"
        fill="#FFF"
      />
    </g>
  </svg>
);
export default DotIcon;

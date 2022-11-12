import * as React from 'react';
import { SVGProps } from 'react';
const TelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 32 32" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#14c8ff" r={16} />
      <path
        d="M25.08 11.478c.633.513 1.032 1.574.892 2.353l-1.36 7.524c-.142.784-.892 1.647-1.664 1.918l-7.419 2.605c-.772.271-1.92.075-2.552-.438l-6.058-4.917c-.633-.513-1.033-1.569-.89-2.353l1.36-7.524C7.53 9.862 8.28 9 9.053 8.728l7.42-2.606c.773-.272 1.92-.074 2.553.438zm-6.311 3.378.302-1.53-2.832.005.4-2.016h-.915a5.759 5.759 0 0 1-2.748 2.225l-.257 1.319h1.238s-.419 1.894-.56 2.593c-.35 1.78.53 3.042 1.882 3.042h2.288l.4-1.69h-1.914c-.85 0-.805-.465-.64-1.29l.527-2.662z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
);
export default TelIcon;

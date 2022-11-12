import * as React from 'react';
import { SVGProps } from 'react';
const TpayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#3058A6" fillRule="nonzero" />
      <g fill="#FFF">
        <path
          d="M15.995 27.228c-6.198 0-11.223-5.025-11.223-11.223S9.797 4.782 15.995 4.782s11.223 5.025 11.223 11.223-5.025 11.223-11.223 11.223m0-23.161c-6.583 0-11.938 5.355-11.938 11.938s5.355 11.938 11.938 11.938 11.938-5.355 11.938-11.938S22.578 4.067 15.995 4.067"
          fillRule="nonzero"
        />
        <path d="m20.199 20.275-.623 2.699-.15.653h-.67l-3.445-.002h-.014c-1.381-.023-2.465-.39-3.176-1.038.614 1.083 1.918 1.71 3.738 1.74h.014l3.444.002h.67l.151-.653.623-2.699-.486-1.031-.076.329zM19.116 8.704l-.492-1.023-.07.32-.467 2.127h.716zm2.487 2.461-.62 2.625-.154.648h-3.733l-.948 4.328c-.02.124-.032.25-.032.32 0 .061.007.1.013.119a.6.6 0 0 0 .223.038h.408l.898-4.102h3.733l.153-.649.62-2.625-.482-1.036-.08.334zm-9.262 3.273H9.74l.896.703h1.552z" />
        <path d="M16.434 20.086h-.095c-.724-.019-1.066-.396-1.066-1 0-.144.024-.335.048-.478l1.098-5.012h3.744l.62-2.625h-3.744l.692-3.15h-3.054l-.693 3.15H10.67l-.596 2.625h3.314l-1.29 5.895c-.07.286-.095.62-.095.787 0 1.682 1.327 2.472 3.308 2.505l3.444.001.623-2.698h-2.944z" />
      </g>
    </g>
  </svg>
);
export default TpayIcon;

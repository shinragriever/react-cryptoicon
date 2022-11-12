import { SVGProps } from 'react';
const AtlasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <defs>
      <path id="atlas_svg__a" d="M2.5 4.938 0 0h5z" />
      <path
        d="M8.5 6.498 4.03 15.99c-.148.304-.225.55-.55.55l-2.953.002c-.423 0-.657-.109-.451-.55L7.296.447C7.445.19 7.537 0 7.862 0H9.14c.325 0 .417.19.565.448l7.22 15.544c.206.442-.028.551-.451.551l-2.953-.001c-.325 0-.402-.247-.55-.551L8.5 6.498z"
        id="atlas_svg__b"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fill="#31FAFB" fillRule="nonzero" cx={16} cy={16} r={16} />
      <use fill="#FFF" xlinkHref="#atlas_svg__a" transform="translate(13.5 21.312)" />
      <use fill="#FFF" xlinkHref="#atlas_svg__b" transform="translate(7.5 6.25)" />
    </g>
  </svg>
);
export default AtlasIcon;

import { SVGProps } from 'react';
const CrvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#40649F" fillRule="nonzero" cx={16} cy={16} r={16} />
      <path
        d="M12.997 7.25c1.751 0 6.08.835 10.19 3.806 4.11 2.971 2.264 7.147 1.345 7.962-.92.815-8.108 1.891-8.556 2.635-.448.743-.97 3.597-3.21 3.597s-3.282-2.27-3.81-3.587c-.53-1.317-1.206-3.548-1.206-6.676S9.1 7.25 12.997 7.25zm-1.394 8.279-.136.005c-1.353.101-1.99 2.085-1.847 4.247.143 2.162 1.773 4.004 2.756 4.004.983 0 2.44-1.306 2.15-4.13-.291-2.825-1.706-4.223-3.059-4.121zm7.456-3.515c-1.895-.737-4.694-1.407-3.81.53.298.651.538 1.783.721 3.395 3.524-.26 5.64-.68 6.345-1.26 1.057-.868-1.362-1.927-3.256-2.665z"
        fill="#FFF"
      />
    </g>
  </svg>
);
export default CrvIcon;
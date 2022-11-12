import * as React from 'react';
import { SVGProps } from 'react';
const GrinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#FFF300" />
      <path
        d="M22.64 9.568c-.34-.761-.655-2.265-1.525-2.6-1.12-.43-1.811 2.388-1.976 3.1h-.167c-.282-1.22-.66-2.95-2-3.334-.62 2.605.648 5.414 1.834 7.669 1.266-.606 1.883-2.5 2-3.835h.167l1.334 4.001c1.073-.308 1.446-1.37 1.833-2.334.832-2.068 1.53-4.612 1-6.835-1.6.454-2.088 2.743-2.5 4.168zM6.636 14.903c1.432-.684 2.114-2.85 2.334-4.335h.166c.17.716.623 2.562 1.517 2.68 1.14.151 1.737-2.377 1.817-3.18h.167c.363 1.255.746 2.888 2 3.501.464-1.944-.09-4.017-.801-5.835-.183-.467-.558-1.728-1.203-1.728-1.056 0-1.65 2.784-1.83 3.562h-.166L9.303 5.567c-2.346 1.12-3.62 7.077-2.667 9.336zm-2.501 2c1.74 7.594 9.771 11.9 17.005 8.692a11.773 11.773 0 0 0 5.924-5.858c.311-.674.922-1.895.566-2.78-.355-.882-3.795.558-4.655.935a.387.387 0 0 0-.226.295.672.672 0 0 0 .614.772l1.444.112c-2.615 5.062-9.686 7.3-14.67 3.256-1.116-.905-2.111-1.98-2.781-3.256-.324-.617-.625-1.406-1.175-1.83-.53-.406-1.332-.546-2.046-.338z"
        fill="#FFF"
      />
    </g>
  </svg>
);
export default GrinIcon;

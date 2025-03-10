import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type TailsIconProps = IconProps;

export const TailsIcon = forwardRef<SVGSVGElement, TailsIconProps>(
  function TailsIcon(props: TailsIconProps, ref) {
    return (
      <Icon
        data-testid="TailsIcon"
        aria-label="tails"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M5.5 2S4.316.422 1.248.07A10.93 10.93 0 0 0 0 0l2 3-2 5 6 4 6-4-2-5 2-3c-.447 0-.862.025-1.248.07C7.684.421 6.5 2 6.5 2h-1Zm4.492-.79-.008.001-.031.057.039-.058Zm-1.746.658c.41-.234.974-.481 1.717-.652L8 3h.923l1.135 2.837c-.777.345-1.695.856-2.5 1.513-.577.472-1.122 1.041-1.506 1.7-.347-.677-.86-1.261-1.41-1.744a10.171 10.171 0 0 0-2.631-1.64L3.077 3H4L2.037 1.216c.743.17 1.307.418 1.717.652.366.21.618.413.77.554a2.343 2.343 0 0 1 .183.187L5 3h2l.293-.391a2.343 2.343 0 0 1 .182-.186c.153-.142.405-.346.771-.555Zm-6.23-.657-.008-.001.039.058-.031-.057Zm8.414 5.555c-.7.314-1.524.775-2.239 1.359-.816.666-1.429 1.442-1.625 2.296l4.204-2.803-.34-.852Zm-9.2.852.41-1.023a9.173 9.173 0 0 1 2.342 1.462c.777.683 1.355 1.49 1.489 2.388L1.23 7.618Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);

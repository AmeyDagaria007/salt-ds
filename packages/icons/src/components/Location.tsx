import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type LocationIconProps = IconProps;

export const LocationIcon = forwardRef<SVGSVGElement, LocationIconProps>(
  function LocationIcon(props: LocationIconProps, ref) {
    return (
      <Icon
        data-testid="LocationIcon"
        aria-label="location"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M3.517 5.68 6.002 10l2.541-4.394.007-.012c.138-.223.246-.47.324-.744l.002-.01.003-.01c.08-.262.121-.535.121-.821a2.99 2.99 0 0 0-.224-1.165 2.968 2.968 0 0 0-.648-.944l-.008-.01-.007-.008a2.974 2.974 0 0 0-.952-.65A2.869 2.869 0 0 0 6 1c-.425 0-.808.08-1.161.233a3.065 3.065 0 0 0-1.614 1.61A2.988 2.988 0 0 0 3 4.007a2.922 2.922 0 0 0 .497 1.643l.02.03ZM2.305 2.45A4.066 4.066 0 0 1 4.44.315 3.868 3.868 0 0 1 6 0c.555 0 1.075.105 1.56.316.485.211.907.5 1.267.868.368.359.657.78.868 1.265.203.485.305 1.004.305 1.559 0 .383-.055.754-.164 1.113-.102.36-.247.691-.434.996L6 12 2.669 6.21A3.922 3.922 0 0 1 2 4.009c0-.555.102-1.074.305-1.559Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M6 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);


import { DarkMode, Gradient, LightMode } from '@/components/Icon';
import type { IconColors } from '@/components/Icon';
import { cl, } from '@/util/util';

interface IconProps {
  id:    string;
  color: IconColors;
};

const fillOpacity    = 0.5;
const strokeWidth    = 2;
const strokeLinecap  = "round";
const strokeLinejoin = "round";
const fillRule = "evenodd";
const clipRule = "evenodd";
const twFillVFore   = "fill-[var(--icon-foreground)]";
const twFillVBack   = "fill-[var(--icon-background)]";
const twStrokeVFore = "stroke-[color:var(--icon-foreground)]";

const CCircle = ({ id, cx=20, cy=20, r=12 }: {
  id:  IconProps['id'];
  cx?: number;
  cy?: number;
  r?:  number;
}) =>
  <circle {...{cx, cy, r}} fill={`url(#${id}-gradient)`} />;

export const InstallationIcon = ({ id, color }: IconProps) =>
  <>
    <defs>
      <Gradient
        id={`${id}-gradient`}
        {...{color}}
        gradientTransform="matrix(0 21 -21 0 12 3)"
      />
      <Gradient
        id={`${id}-gradient-dark`}
        {...{color}}
        gradientTransform="matrix(0 21 -21 0 16 7)"
      />
    </defs>
    <LightMode>
      <CCircle {...{id}} cx={12} cy={12} />
      <path
        d="m8 8 9 21 2-10 10-2L8 8Z"
        {...cl(twFillVBack, twStrokeVFore)}
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
      />
    </LightMode>
    <DarkMode>
      <path
        d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
        fill  ={`url(#${id}-gradient-dark)`}
        stroke={`url(#${id}-gradient-dark)`}
        {...{strokeWidth, strokeLinecap, strokeLinejoin}}
      />
    </DarkMode>
  </>;

export const LightbulbIcon = ({ id, color }: IconProps) =>
  <>
    <defs>
      <Gradient
        id={`${id}-gradient`}
        {...{color}}
        gradientTransform="matrix(0 21 -21 0 20 11)"
      />
      <Gradient
        id={`${id}-gradient-dark`}
        {...{color}}
        gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)"
      />
    </defs>
    <LightMode>
      <CCircle {...{id}} />
      <path
        {...{fillRule, clipRule, fillOpacity}}
        d="M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z"
        {...cl(twFillVBack)}
      />
      <path
        d="M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z"
        {...cl(twFillVFore)}
      />
      <path
        d="M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z"
        {...cl(twFillVFore)}
      />
    </LightMode>
    <DarkMode>
      <path
        {...{fillRule, clipRule}}
        d="M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z"
        fill={`url(#${id}-gradient-dark)`}
      />
    </DarkMode>
  </>;

export const PluginsIcon = ({ id, color }: IconProps) =>
  <>
    <defs>
      <Gradient
        id={`${id}-gradient`}
        {...{color}}
        gradientTransform="matrix(0 21 -21 0 20 11)"
      />
      <Gradient
        id={`${id}-gradient-dark-1`}
        {...{color}}
        gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
      />
      <Gradient
        id={`${id}-gradient-dark-2`}
        {...{color}}
        gradientTransform="matrix(0 14 -14 0 16 10)"
      />
    </defs>
    <LightMode>
      <CCircle {...{id}} />
      <g {...cl(twFillVBack, twStrokeVFore)}
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
      >
        <path d="M3 9v14l12 6V15L3 9Z" />
        <path d="M27 9v14l-12 6V15l12-6Z" />
      </g>
      <path
        d="M11 4h8v2l6 3-10 6L5 9l6-3V4Z"
        {...cl(twFillVBack)}
        {...{fillOpacity}}
      />
      <g {...cl(twStrokeVFore)}
        {...{strokeWidth, strokeLinecap, strokeLinejoin}}
      >
        <path d="M20 5.5 27 9l-12 6L3 9l7-3.5" />
        <path d="M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 ms-5-.895-5-2V5" />
      </g>
    </LightMode>
    <DarkMode {...{strokeWidth, strokeLinecap, strokeLinejoin}}>
      <path
        d="M17.676 3.38a3.887 3.887 0 0 0-3.352 0l-9 4.288C3.907 8.342 3 9.806 3 11.416v9.168c0 1.61.907 3.073 2.324 3.748l9 4.288a3.887 3.887 0 0 0 3.352 0l9-4.288C28.093 23.657 29 22.194 29 20.584v-9.168c0-1.61-.907-3.074-2.324-3.748l-9-4.288Z"
        stroke={`url(#${id}-gradient-dark-1)`}
      />
      <path
        d="M16.406 8.087a.989.989 0 0 0-.812 0l-7 3.598A1.012 1.012 0 0 0 8 12.61v6.78c0 .4.233.762.594.925l7 3.598a.989.989 0 0 0 .812 0l7-3.598c.361-.163.594-.525.594-.925v-6.78c0-.4-.233-.762-.594-.925l-7-3.598Z"
        fill  ={`url(#${id}-gradient-dark-2)`}
        stroke={`url(#${id}-gradient-dark-2)`}
      />
    </DarkMode>
  </>;

export const PresetsIcon = ({ id, color }: IconProps) =>
  <>
    <defs>
      <Gradient
        id={`${id}-gradient`}
        {...{color}}
        gradientTransform="matrix(0 21 -21 0 20 3)"
      />
      <Gradient
        id={`${id}-gradient-dark`}
        {...{color}}
        gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
      />
    </defs>
    <LightMode>
      <CCircle {...{id}} cy={12} />
      <g {...cl(twFillVBack, twStrokeVFore)}
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
      >
        <path d="M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
        <path d="M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
        <path d="M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
        <path d="M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
      </g>
    </LightMode>
    <DarkMode fill={`url(#${id}-gradient-dark)`}>
      <path
        {...{fillRule, clipRule}}
        d="M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
      />
      <path d="M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z" />
    </DarkMode>
  </>;

export const ThemingIcon = ({ id, color }: IconProps) =>
  <>
    <defs>
      <Gradient
        id={`${id}-gradient`}
        {...{color}}
        gradientTransform="matrix(0 21 -21 0 12 11)"
      />
      <Gradient
        id={`${id}-gradient-dark`}
        {...{color}}
        gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
      />
    </defs>
    <LightMode>
      <CCircle {...{id}} cx={12} />
      <path
        d="M27 12.13 19.87 5 13 11.87v14.26l14-14Z"
        {...cl(twFillVBack, twStrokeVFore)}
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
      />
      <path
        d="M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z"
        {...cl(twFillVBack)}
        {...{fillOpacity}}
      />
      <path
        d="M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10"
        {...cl(twStrokeVFore)}
        {...{strokeWidth, strokeLinecap, strokeLinejoin}}
      />
      <path
        d="M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z"
        {...cl(twFillVBack, twStrokeVFore)}
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
      />
    </LightMode>
    <DarkMode>
      <path
        {...{fillRule, clipRule}}
        d="M3 2a1 1 0 0 0-1 1v21a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H3Zm16.752 3.293a1 1 0 0 0-1.593.244l-1.045 2A1 1 0 0 0 17 8v13a1 1 0 0 0 1.71.705l7.999-8.045a1 1 0 0 0-.002-1.412l-6.955-6.955ZM26 18a1 1 0 0 0-.707.293l-10 10A1 1 0 0 0 16 30h13a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1h-3ZM5 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1-5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"
        fill={`url(#${id}-gradient-dark)`}
      />
    </DarkMode>
  </>;

export const WarningIcon = ({ id, color }: IconProps) =>
  <>
    <defs>
      <Gradient
        id={`${id}-gradient`}
        {...{color}}
        gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
      />
      <Gradient
        id={`${id}-gradient-dark`}
        {...{color}}
        gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
      />
    </defs>
    <LightMode>
      <CCircle {...{id}} />
      <path
        d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z"
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
        {...cl(twFillVBack, twStrokeVFore)}
      />
      <path
        d="m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z"
        {...cl(twFillVFore, twStrokeVFore)}
        {...{strokeWidth, strokeLinecap, strokeLinejoin}}
      />
      <path
        d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke="currentColor"
        {...cl(twFillVBack, twStrokeVFore)}
        {...{fillOpacity, strokeWidth, strokeLinecap, strokeLinejoin}}
      />
    </LightMode>
    <DarkMode>
      <path
        {...{fillRule, clipRule}}
        d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill={`url(#${id}-gradient-dark)`}
      />
    </DarkMode>
  </>;

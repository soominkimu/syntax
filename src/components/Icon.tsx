import { useId } from 'react'
import { cl, } from '@/util/util';

import { InstallationIcon } from '@/components/icons/InstallationIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { PluginsIcon } from '@/components/icons/PluginsIcon'
import { PresetsIcon } from '@/components/icons/PresetsIcon'
import { ThemingIcon } from '@/components/icons/ThemingIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'

const icons = {
  installation: InstallationIcon,
  presets:      PresetsIcon,
  plugins:      PluginsIcon,
  theming:      ThemingIcon,
  lightbulb:    LightbulbIcon,
  warning:      WarningIcon,
};

type Icons = { [K in keyof typeof icons]: React.ReactNode; };
export type IconColors = 'blue'|'amber';

const iconStyles: { [K in IconColors]: string; } = {
  blue: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]',
  amber:
    '[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]',
};

export function Icon({ color = 'blue', icon, className, ...props }: {
  color?: IconColors;
  icon:  keyof Icons;
  className?: TClassName;
}) {
  let id = useId()
  let IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      {...cl(className, iconStyles[color])}
      {...props}
    >
      <IconComponent {...{id, color}} />
    </svg>
  )
}

interface StopInfo {
  stopColor: string;
  offset?:   number;
};
type Gradients = {
  [K in IconColors]: StopInfo[];
};

const gradients: Gradients = {
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: .527 },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: .08 },
    { stopColor: '#F59E0B', offset: .837 },
  ],
};

interface GradientProps extends React.SVGProps<SVGRadialGradientElement> {
  color?: IconColors;
};

export const Gradient: React.FC<GradientProps> = ({
  color = 'blue',
  ...props
}) => {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {(gradients[color] as StopInfo[]).map((st, index) => (
        <stop key={index} {...st} />
      ))}
    </radialGradient>
  )
}

type ModeComponent = React.FC<React.PropsWithChildren<React.SVGProps<SVGGElement & TClassName>>>;

export const LightMode: ModeComponent = ({
  className,
  ...props
}) => {
  return <g {...cl('dark:hidden', className)} {...props} />
}

export const DarkMode: ModeComponent = ({
  className,
  ...props
}) => {
  return <g {...cl('hidden dark:inline', className)} {...props} />
}

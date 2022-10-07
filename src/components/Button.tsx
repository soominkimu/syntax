import Link from 'next/link'
import { cl, cL } from '@/util/util';

type StyleKeys = 'primary'|'secondary';
const styles: { [K in StyleKeys]: string; } = {
  primary:   cL('rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900',
    'hover:bg-sky-200 active:bg-sky-500 focus:outline-none focus-visible:outline-2',
    'focus-visible:outline-offset-2 focus-visible:outline-sky-300/50'),
  secondary: cL('rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white',
    'hover:bg-slate-700 active:text-slate-400 focus:outline-none focus-visible:outline-2',
    'focus-visible:outline-offset-2 focus-visible:outline-white/50'),
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: StyleKeys;
};

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: StyleKeys;
  href:     string;
};

export const Button = ({ variant = 'primary', className, ...props }: IButtonProps) =>
  <button {...cl(styles[variant], className)} {...props} />;

export const ButtonLink = ({ variant = 'primary', href, className, ...props }: ILinkProps) =>
  <Link {...{href}}>
    <a {...cl(styles[variant], className)} {...props} />
  </Link>;

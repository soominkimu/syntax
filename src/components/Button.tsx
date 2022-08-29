import Link from 'next/link'
import { cLo } from '@/util/util';

type StyleKeys = 'primary'|'secondary';
const styles: { [K in StyleKeys]: string; } = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 active:bg-sky-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 active:text-slate-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: StyleKeys;
};

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: StyleKeys;
  href:     string;
};

export function Button({ variant = 'primary', ...props }: IButtonProps) {
  const { className, ...rest } = props;
  return <button {...cLo(styles[variant], className)} {...rest} />
}

export function ButtonLink({ variant = 'primary', href, ...props }: ILinkProps) {
  const { className, ...rest } = props;
  return (
    <Link {...{href}}>
      <a {...cLo(styles[variant], className)} {...rest} />
    </Link>
  )
}

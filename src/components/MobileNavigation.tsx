import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'

import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { cl, } from '@/util/util';

export function MobileNavigation({ navigation }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onRouteChange = () => setIsOpen(false);

    router.events.on('routeChangeComplete', onRouteChange)
    router.events.on('routeChangeError',    onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
      router.events.off('routeChangeError',    onRouteChange)
    }
  }, [router, isOpen]);

  const MIcon = ({ open }: { open?: boolean; }) =>
    <svg
      aria-hidden="true"
      className="w-6 h-6 stroke-slate-500"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d={open
        ? "M4 7h16M4 12h16M4 17h16"
        : "M5 5l14 14M19 5l-14 14"}
      />
    </svg>;

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="relative">
        <span className="sr-only">Open navigation</span>
        <MIcon open />
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        {...cl("fixed inset-0 z-50 flex items-start pr-10 overflow-y-auto bg-slate-900/50",
          "backdrop-blur lg:hidden")}
      >
      <Dialog.Panel {...cl("w-full max-w-xs min-h-full px-4 pt-5 pb-12 bg-white",
        "dark:bg-slate-900 sm:px-6")}
      >
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>
          <div className="flex items-center">
            <button type="button" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close navigation</span>
              <MIcon />
            </button>
            <Link href="/">
              <a className="block w-10 ml-6 overflow-hidden lg:w-auto">
                <span className="sr-only">Home page</span>
                <Logo />
              </a>
            </Link>
          </div>
          <Navigation navigation={navigation} className="px-1 mt-5" />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

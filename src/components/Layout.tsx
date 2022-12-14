/*=============================================================================
 Layout.tsx - 

 (C) 2022 SpacetimeQ INC
=============================================================================*/
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Hero } from '@/components/Hero'
// import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'

import type { Node } from '@markdoc/markdoc';
import type { INavigationEl } from '@/models';

import { cl, cL, cc, c0, } from '@/util/util';
import { DebugText } from '@/util/util-react';

interface IToCNode {  // Table of Contents Element
  id:       string;
  title:    string;
  children: IToCNode[];  // recursive
};

function Header({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <header
      {...cc(cL('sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5',
        'shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8'),
        isScrolled, cL('dark:bg-slate-900/95 dark:backdrop-blur',
          'dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'),
          'dark:bg-transparent')}
    >
      <div className="mr-6 lg:hidden">
        <MobileNavigation {...{navigation}} />
      </div>
      <div className="relative flex items-center flex-grow basis-0">
        <Link href="/">
          <a className="block w-10 overflow-hidden lg:w-auto">
            <span className="sr-only">Home page</span>
            <p className='hidden font-extrabold lg:block'>
              <span className="text-sm text-sky-500">Tech</span>
              <span className="text-sky-800">Avenue</span>
            </p>
          </a>
        </Link>
      </div>
      <div className="mr-6 -my-5 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex justify-end basis-0 space-x-6 sm:space-x-8 md:flex-grow">
        <DebugText>Layout.tsx/Header</DebugText>
        <ThemeSelector className="relative z-10" />
        <Link href="https://github.com">
          <a className="group">
            <span className="sr-only">GitHub</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-6 h-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
            </svg>
          </a>
        </Link>
      </div>
    </header>
  );
}

export function Layout({ children, title, navigation, tableOfContents }: {
  children:        React.ReactNode;
  title:           string;
  navigation:      INavigationEl[];
  tableOfContents: IToCNode[];
}) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const allLinks = navigation.flatMap((section) => section.links);
  const linkIndex = allLinks.findIndex((link) => link.href === router.pathname);
  const prevPage = allLinks[linkIndex - 1];
  const nextPage = allLinks[linkIndex + 1];
  const section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  );
  const currentSection = useToC(tableOfContents);
  // console.dir(tableOfContents);

  function isActive(section: IToCNode) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }

  return (
    <>
      <Header {...{navigation}} />

      {isHomePage && <Hero />}

      <div {...cl("relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12")}>
        <div {...cl("hidden lg:relative lg:block lg:flex-none")}>
          <DebugText>Layout.tsx</DebugText>
          <div {...cl("absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden")} />
          <div {...cl("sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)]",
            "overflow-y-auto py-16 pl-0.5")}
          >
            <div {...cl("absolute bottom-0 right-0 hidden w-px h-12 top-16 bg-gradient-to-t",
              "from-slate-800 dark:block")}
            />
            <div {...cl("absolute bottom-0 right-0 hidden w-px top-28 bg-slate-800 dark:block")} />
            <Navigation {...{navigation}} {...cl("w-64 pr-8 xl:w-72 xl:pr-16")} />
          </div>
        </div>
        <div {...cl("flex-auto max-w-2xl min-w-0 px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8",
          "xl:px-16")}
        >
          <article>
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="text-sm font-medium font-display text-sky-500">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 {...cl("text-3xl tracking-tight font-display text-slate-900",
                    "dark:text-white")}
                  >
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="flex pt-6 mt-12 border-t border-slate-200 dark:border-slate-800">
            {prevPage && (
              <div>
                <dt className="text-sm font-medium font-display text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link href={prevPage.href}>
                    <a {...cl("text-base font-semibold text-slate-500 hover:text-slate-600",
                      "dark:text-slate-400 dark:hover:text-slate-300")}
                    >
                      &larr; {prevPage.title}
                    </a>
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="text-sm font-medium font-display text-slate-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link href={nextPage.href}>
                    <a {...cl("text-base font-semibold text-slate-500 hover:text-slate-600",
                      "dark:text-slate-400 dark:hover:text-slate-300")}
                    >
                      {nextPage.title} &rarr;
                    </a>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div {...cl("hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block",
          "xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6")}
        >
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  {...cl("text-sm font-medium font-display text-slate-900 dark:text-white")}
                >
                  On this page
                </h2>
                <ul className="mt-4 text-sm space-y-3">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link href={`#${section.id}`}>
                          <a
                            {...c0(isActive(section), 'text-sky-500',
                              cL('font-normal text-slate-500 hover:text-slate-700',
                              'dark:text-slate-400 dark:hover:text-slate-300'))}
                          >
                            {section.title}
                          </a>
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ul className="pl-5 mt-2 space-y-3 text-slate-500 dark:text-slate-400">
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link href={`#${subSection.id}`}>
                                <a
                                  {...c0(isActive(subSection), 'text-sky-500',
                                    'hover:text-slate-600 dark:hover:text-slate-300')}
                                >
                                  {subSection.title}
                                </a>
                              </Link>
                            </li>))}
                        </ul>)}
                    </li>))}
                </ul>
              </>)}
          </nav>
        </div>
      </div>
    </>
  )
}

/**
 * Table Of Contents
 */
function useToC(tocs: IToCNode[]) {
  const [currentSection, setCurrentSection] = useState(tocs[0]?.id);

  interface IHeading {
    id:  IToCNode['id'];
    top: typeof window.scrollY;
  };

  const getHeadings = useCallback(() => {  // build top position list of each ToC node
    // generator: values to be iterated are the result of a computation
    function* traverse(node: IToCNode | IToCNode[]) {
      if (Array.isArray(node)) {     // array of node
        for (const child of node) {  // iterate each node
          yield* traverse(child);    // recursively
        }
      } else {
        const el = document.getElementById(node.id);
        if (!el) return;

        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        yield { id: node.id, top };

        for (const child of node.children ?? []) {
          yield* traverse(child);
        }
      }
    }
    return Array.from(traverse(tocs));
  }, [tocs]);

  useEffect(() => {
    const headings = getHeadings() as IHeading[];
    if (tocs.length === 0 || headings.length === 0) return;
    function onScroll() {
      const sortedHeadings = headings!.concat([]).sort((a, b) => a.top - b.top);

      const top = window.pageYOffset;  // alias for scrollY
      let current = sortedHeadings[0].id;
      for (const sH of sortedHeadings)
        if (top >= sH.top)
          current = sH.id;
      setCurrentSection(current);
    }
    const eventOption = {
      capture: true,
      passive: true,
    };
    window.addEventListener('scroll', onScroll, eventOption);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll, eventOption);
    }
  }, [getHeadings, tocs]);

  return currentSection;
}

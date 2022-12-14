import Head from 'next/head';
import { slugifyWithCounter } from '@sindresorhus/slugify';
import { Layout } from '@/components/Layout';
import type { AppProps } from 'next/app';
// import type { Node } from '@markdoc/markdoc';

import 'focus-visible';
import '@/styles/tailwind.css';

import type { INavigationEl } from '@/models';

const navigation: INavigationEl[] = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation',    href: '/docs/installation' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Understanding caching',         href: '/docs/understanding-caching' },
      { title: 'Predicting user behavior',      href: '/docs/predicting-user-behavior' },
      { title: 'Basics of time-travel',         href: '/docs/basics-of-time-travel' },
      { title: 'Introduction to string theory', href: '/docs/introduction-to-string-theory' },
      { title: 'The butterfly effect',          href: '/docs/the-butterfly-effect' },
    ],
  },
  {
    title: 'Advanced guides',
    links: [
      { title: 'Writing plugins',            href: '/docs/writing-plugins' },
      { title: 'Neuralink integration',      href: '/docs/neuralink-integration' },
      { title: 'Temporal paradoxes',         href: '/docs/temporal-paradoxes' },
      { title: 'Testing',                    href: '/docs/testing' },
      { title: 'Compile-time caching',       href: '/docs/compile-time-caching' },
      { title: 'Predictive data generation', href: '/docs/predictive-data-generation' },
    ],
  },
  {
    title: 'API reference',
    links: [
      { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict' },
      { title: 'CacheAdvance.flush()',   href: '/docs/cacheadvance-flush' },
      { title: 'CacheAdvance.revert()',  href: '/docs/cacheadvance-revert' },
      { title: 'CacheAdvance.regret()',  href: '/docs/cacheadvance-regret' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute',  href: '/docs/how-to-contribute' },
      { title: 'Architecture guide', href: '/docs/architecture-guide' },
      { title: 'Design principles',  href: '/docs/design-principles' },
    ],
  },
];

function getNodeText(node: any) {
  let text = '';
  for (const child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
}

function collectHeadings(nodes: any, slugify = slugifyWithCounter()) {
  const sections = [];

  for (const node of nodes) {
    if (/^h[23]$/.test(node.name)) {
      const title = getNodeText(node);
      if (title) {
        node.attributes.id = slugify(title);
        if (node.name === 'h3') {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          });
        } else {
          sections.push({ ...node.attributes, title, children: [] });
        }
      }
    }
    sections.push(...collectHeadings(node.children ?? [], slugify));
  }
  return sections;
}

export default function App({ Component, pageProps }: AppProps) {
  const title = pageProps.markdoc?.frontmatter.title;

  const pageTitle = pageProps.markdoc?.frontmatter.pageTitle || `${title} - Docs`;

  const description = pageProps.markdoc?.frontmatter.description;

  const tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout {...{navigation, title, tableOfContents}}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

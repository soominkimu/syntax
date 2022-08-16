import { Fragment } from 'react'
import Image from 'next/image'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { ButtonLink } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'

import { cLo, cCo, } from '@/util/util';
import { DebugText } from '@/util/util-react';

const codeLanguage = 'javascript'
const codeSample = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json',            isActive: false },
]

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:-mt-[4.75rem] dark:lg:pt-[4.75rem]">
      <DebugText>Hero.jsx</DebugText>
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="items-center max-w-2xl px-4 mx-auto grid grid-cols-1 gap-y-16 gap-x-8 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="absolute -mb-56 opacity-50 bottom-full right-full -mr-72">
              <Image
                src={blurCyanImage}
                alt=""
                layout="fixed"
                width={530}
                height={530}
                unoptimized
                priority
              />
            </div>
            <div className="relative">
              <p className="inline text-5xl tracking-tight text-transparent bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display">
                Never miss the cache again.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Cache every single thing your app could ever do ahead of time,
                so your code never even has to run at all.
              </p>
              <div className="flex mt-8 space-x-4 md:justify-center lg:justify-start">
                <ButtonLink href="/">Get started</ButtonLink>
                <ButtonLink href="/" variant="secondary">
                  View on GitHub
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-[60%]" />
            </div>
            <div className="relative">
              <div className="absolute -top-64 -right-64">
                <Image
                  src={blurCyanImage}
                  alt=""
                  layout="fixed"
                  width={530}
                  height={530}
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute -bottom-40 -right-44">
                <Image
                  src={blurIndigoImage}
                  alt=""
                  layout="fixed"
                  width={567}
                  height={567}
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute h-px -top-px left-20 right-11 bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                <div className="absolute h-px -bottom-px left-11 right-20 bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                <div className="pt-4 pl-4">
                  <svg
                    aria-hidden="true"
                    className="h-2.5 w-auto stroke-slate-500/30"
                    fill="none"
                  >
                    <circle cx="5" cy="5" r="4.5" />
                    <circle cx="21" cy="5" r="4.5" />
                    <circle cx="37" cy="5" r="4.5" />
                  </svg>
                  <div className="flex mt-4 text-xs space-x-2">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        {...cCo('flex h-6 rounded-full',
                          tab.isActive, 'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300',
                          'text-slate-500')}
                      >
                        <div
                          {...cCo('flex items-center rounded-full px-2.5',
                            tab.isActive, 'bg-slate-800')}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start px-1 mt-6 text-sm">
                    <div
                      aria-hidden="true"
                      className="pr-4 font-mono border-r select-none border-slate-300/5 text-slate-600"
                    >
                      {Array.from({
                        length: codeSample.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      {...defaultProps}
                      code={codeSample}
                      language={codeLanguage}
                      theme={undefined}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          {...cLo(className, 'flex overflow-x-auto pb-6')}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, index) => (
                              <div key={index} {...getLineProps({ line })}>
                                {line.map((token, index) => (
                                  <span
                                    key={index}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
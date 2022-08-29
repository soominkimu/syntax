import { Fragment } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import type { Language } from 'prism-react-renderer'

export const Fence: React.FC<React.PropsWithChildren<{
  language: Language;
}>> = ({
  children,
  language
}) => {
  return (
    <Highlight
      {...defaultProps}
      code={(children as string).trimEnd()}
      {...{language}}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre {...{className, style}}>
          <code>
            {tokens.map((line, index) => (
              <Fragment key={index}>
                {line.map((token, index) => (
                  <span key={index} {...getTokenProps({ token })} />
                ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

// ----------------------------------------------------------------------------
// React class
// ----------------------------------------------------------------------------
/**
 * Allowed className: undefined is just ignored, null is not allowed in the React argument
 */
type TClassName = Undefinable<string>;
/**
 * In case of 'false' or null or undefined, the argument is just ignored.
 * Ex) (i > 0) & 'ml-4' can be string or 'false'
 */
type TClassName0 = Maybe<string | false>;
/**
 * className object used in the React argument
 */
interface IClassNameObj {
  readonly className?: TClassName;
};
/**
 * extended className
 */
interface IClassX {
  readonly classX?: TClassName;
};

type PropsWithClassName<P> = P & IClassNameObj;
type PropsWithClassNameChildren<P> = React.PropsWithChildren<P & IClassNameObj>;
/**
 * react function with className object as a prop
 */
interface IFClassName<P = {}> {
  (props: PropsWithClassName<P>): ReactElement<any, any> | null;
};

interface IEditable {
  editable?: boolean;
}

interface INavigationEl {  // element
  title: string;
  links: {
    title: string;
    href:  string;
  }[];
};

interface ITableOfContentsEl {  // element
  id:       string;
  title:    string;
  children: ITableOfContentsEl[];
};

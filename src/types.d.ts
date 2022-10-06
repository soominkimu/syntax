/*=============================================================================
 types.d.ts - ambient types

 d.ts files are treated as an ambient module declarations only if they don't have any imports.
 If you provide an import line, it's now treated as a normal module file, not the global one,
 so augmenting modules definitions doesn't work.
 Also, you should not use 'export' in this file.

 (C) 2022 SpacetimeQ INC.
=============================================================================*/
type Nullable<T>    = T | null;  // { [P in keyof T]: T[P] | null }  not a built-in
type Undefinable<T> = T | undefined;
type Maybe<T>       = T | null | undefined;
type Ifable = Maybe<boolean | string | number | object>;  // any type reduceable to boolean

type ValueOf<T> = T[keyof T];  // indexed type
/**
 * make Partial all properties EXCEPT K that must be necessary
 */
type PartialExcept<T, K extends keyof any> = Pick<T, K> & Partial< Omit<T, K> >;

type string0       = Nullable<string>;
type stringU       = Undefinable<string>;
type string0U      = Undefinable< Nullable<string> >;
type TSizeVariants = 'sm'|'md'|'lg';

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
/**
 * react function with className object as a prop
 */
interface IFClassName<P = {}> {
  (props: PropsWithClassName<P>): ReactElement<any, any> | null;
};

interface IEditable {
  editable?: boolean;
};

// ----------------------------------------------------------------------------
// JSON data
// ----------------------------------------------------------------------------
// declare module '*/paths.json' {
//   interface IPathData {
//     [K: string]: string;
//   }
//   const value: IPathData;
//   export = value;
// }

// declare module '*/emojis.json' {
//   interface IEmojis {
//     [K: string]: string;
//   }
//   const value: IEmojis;
//   export = value;
// }
;

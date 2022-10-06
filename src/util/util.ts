/*=============================================================================
 util.ts - general utility functions

 - requires 'types.d.ts' as the ambient type definitions
 - For debugging, attach "border border-pink-400" to the c_base.
 - Regex for the function call and the whole arguments:
    (c[C|L]0?o?)\(\s*([^)]+?)\s*\)
 - Keep this utility module with no dependencies

 (C) 2020 SpacetimeQ INC.
=============================================================================*/
// ----------------------------------------------------------------------------
// Error message
// ----------------------------------------------------------------------------
export type TMessageKind = 'ERROR'|'OK'|'WARN'|'INFO';
/**
 * Error message: kind, code, message
 */
export interface IError {
  kind?:   TMessageKind;
  code:    string;
  message: string;
};
export type TError0 = Nullable<IError>;
// ----------------------------------------------------------------------------
// React class
// ----------------------------------------------------------------------------

const DEVELOPMENT_MODE: boolean =
  !process.env.NODE_ENV ||
   process.env.NODE_ENV === 'development';

export const isDev = () => DEVELOPMENT_MODE;

export const dbg = (text: string) => DEVELOPMENT_MODE ? text : null;

export const addIf = (
  cnd_if: Ifable, // if condition
  c_then: string  // then statement
): string => cnd_if ? c_then : '';

/**
 * 'block' may be not required; w-full not works with block
 */
export const showIf = (show: Ifable) => show ? 'block' : 'hidden';
export const hideIf = (hide: Ifable) => showIf(!hide);

// ----------------------------------------------------------------------------
// className Utilities - Purposes (mainly for tailwindcss' long list of classNames)
// ----------------------------------------------------------------------------
// 1. Combine list of strings, no need to care for the delimeter ' ' between strings.
// 2. Conditional expressions such as {mobile && 'ml-4'} can be seamlessly added.
//    (React className string cannot be concatenated with null or false expressions.)
// 3. Using the Object { className: ... } and the spread operator (...), "className=" can be removed.
// 4. a && 'text' returns 'undefined' for 'false' when a is falsy depending on the type of a
//    so the classname should cover not only 'undefined' but also 'false' case
// -- Naming convention
// c - className, starts with c
// l - list ({ className } object)
// L - list (' ' separated string)
// c - condition ({ className } object)
// C - condition (' ' separated string)

type TCondClassF<T = TClassName> = (  // call signature
  c_base:  TClassName0,  // base classname
  cnd_if:  Ifable,       // if the condition met
  c_then:  TClassName0,  // concatenate
  c_else?: TClassName0   // (optional) otherwise
) => T;

/**
 * className Conditional
 * Concatenate class names only if the provided condition is met
 * and return the className object so that it can be used with the spread syntax
 * - className={cC()}  --->  {...cCo()}
 * @param c_base base string
 * @param cnd_if condition if
 * @param c_then then case
 * @param c_else else case
 * @returns result string | undefined
 */
export const cC: TCondClassF = (   // class with options (if-then-else)
  c_base, cnd_if, c_then, c_else
) => {
  const c_prefix = c_base ? c_base + ' ' : '';  // handle c_base Nullish case
  // const c_prefix = "border border-pink-400 " + (c_base ? c_base + ' ' : '');  // DEBUG
  if (cnd_if) return (c_prefix + c_then);
  if (c_else) return (c_prefix + c_else);  // if the third option was given
  return              c_base || '';
}

/**
 * className Conditional object
 */
export const cc: TCondClassF<IClassNameObj> = (   // class with options (if-then-else)
  c_base, cnd_if, c_then, c_else
) => ({ className: cC(c_base, cnd_if, c_then, c_else) });
export const cCo = cc;  // deprecated

/**
 * className Conditional 0(no base) object
 */
export const c0 = (
  cnd_if:  Ifable,      // if the condition met
  c_then:  TClassName,  // concatenate
  c_else?: TClassName   // (optional) otherwise
): IClassNameObj => ({ className: cnd_if ? c_then : c_else });
export const cC0o = c0;  // deprecated

/**
 * class List
 * className={"m-1 text-gray-400 " + (cls || "")} can be written as:
 * className={cL('m-1', 'text-gray-400', cls)}
 * just boolean true value is filtered by the input type Maybe<string|false>
 */
export const cL = (
  ...clss: readonly TClassName0[]  // rest parameters, list of classNames allowing null or boolean
): TClassName =>
  // clss.push("border border-pink-400");  // DEBUG, remove 'readonly'
  clss.reduce((cum, a) => a // check this add
  ? cum               // if valid previous (cumulative) string
    ? cum + ' ' + a   //   concatenate with the delimeter ' '
    : a               // no valid previous string
  : cum               // no valid a
  ) || undefined;       // Only undefined is allowed in nullish expressions in React

/**
 * class List with If (show or hide condition)
 */
export const cLc = (
  cnd_show: Ifable,        // only show the block if the condition met
  ...clss:  readonly TClassName0[]  // rest parameters, list of classNames allowing null or boolean
): TClassName => cL(showIf(cnd_show), ...clss);
export const cLIf = cLc;  // deprecated

/**
 * class List object: to omit 'className=' using spread attributes
 * className=""
 * {...co('m-1', 'text-gray-400', cls)}
 */
export const cl = (
  ...clss: readonly TClassName0[]
): IClassNameObj => ({ className: cL(...clss) });
export const cLo = cl;  // deprecated
/**
 * class List object with If (show or hide condition)
 */
export const clc = (
  cnd_show: Ifable,
  ...clss:  readonly TClassName0[]
): IClassNameObj => ({ className: cLIf(cnd_show, ...clss) });
export const cLoIf = clc;  // deprecated

// ----------------------------------------------------------------------------
/**
 * conditional string concatenation (cL's string version, no classNames)
 * The difference with cL is just the separating space between strings.
 */
export const cS = (
  ...lstr: readonly TClassName0[]  // rest parameters, list of strings allowing null or boolean
): stringU =>
  lstr.reduce((cum, a) => a  // check this add
  ? cum          // if valid previous (cumulative) string
    ? cum + a    //   concatenate with no delimeter
    : a          // no valid previous string
  : cum          // no valid a
  ) || undefined;  // Only undefined is allowed in nullish expressions in React
// ----------------------------------------------------------------------------

/**
 * number to leadingZero string
 * or use n.toString().padStart(2, "0");  // ES6
 */
export const lZ = (n: number) =>
  (n < 10)
  ? '0' + n
  : n.toString();  // leading Zero making a two digit number string

// const callifdef = (f, arg) => if (f && typeof f === "function") f(arg);

export const toggleValue = <T=string>(val: T, a: T, b: T): T => (val === a) ? b : a;

/**
 * warning format
 * @returns IError defined in 'types.d.ts' (like an action creator in Redux)
 */
export const warn0  = (message: string): IError => ({ code: 'WARN', message });

/**
 * error Format - IError builder
 * kind, code, message to an object format: IError object creator
 */
export const errorFmt = (
  kind:    IError["kind"],  // indexed access type
  code:    IError["code"],
  message: IError["message"]
) => ({ kind, code, message });

/**
  * Plain text in template string to HTML
  */
export const replaceCRtoHTML = (text: string) => text.replace(/\r?\n|\r/g, "<br/>");

/**
  * Template string inserts CR for each line. To remove them use this function.
  */
export const removeCR = (html: string) => html.replace(/\r?\n|\r/g, "");

/**
 * set CSS variables
 * @param css array of css strings
 */
export const setCssVar = (css: string[]) => {
  const root = document.getElementsByTagName('html')[0];
  root.style.cssText = css.join(';');
}

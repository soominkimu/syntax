---
title: React
description: a JavaScript library for building user interfaces.
---
a JavaScript library for building user interfaces.
---

```bash
$ npx browserslist@latest --update-db  ## run regularly, aliased to blu
```

MUST UNDERSTAND

1. `useEffect` and rendering cycle
2. `useCallback` and `useMemo`
3. controlled components
4. `Promise` and `async/await`

## Folder-by-Feature

A **feature folder** structure is organizing your app by **feature** as opposed to technology (Controllers, Views, etc.), which is the default structure in MVC. A **feature folder** structure is easier to maintain than the default structure and even Areas (which is a poor man's **feature folder** structure).

#### Project Directory Structure

```bash
 src  # features, app, api, utils, ui, styles
 ├── index.tsx    # 
 ├── types.d.ts   # Type Declaration file (no explicit import required)
 ├── common.d.ts  # common type declarations
 ├── app  #================== app commons
 │   ├── App.tsx          # App Main
 │   ├── AuthContext.tsx  # authentication context provider
 │   └── store.ts         # redux store
 ├── api  #================== api wrapping (encapsulation) layer
 │   ├── authAPI.ts   # Wrapper of the authentication APIs
 │   ├── dataAPI.ts   # Wrapper of the data APIs (Cloud Firestore Collections/Documents)
 │   └── firebase.ts  # Firebase initialization
 ├── features  #============= Folder-by-Feature
 │   ├── auth   # authentication states
 │   │   ├── authSlice.ts   # redux slice
 │   │   ├── authForms.tsx  # forms
 │   │   └── authPage.tsx   # page
 │   ├── users  # users data
 │   ├── ...    # dash, chat, cal, profile, setting, ...
 │   ├── msgs   # messages
 │   └── notis  # notifications
I├── out  #================== tailwind build -o (.gitignore)
I│   ├── tailwind.o.css    # [3] to be imported in index.tsx
I│   └── tailwind.tw.css   # [2] tailwind build [2] -o [3]
 ├── styles  #=============== sass
 │   ├── App.scss          # sass source
 │   ├── _app.tw.scss      # sass/tailwind source to be imported to [1]
 │   └── tailwind.tw.scss  # [1] sass/tailwind source
 ├── utils  #================ utilities
 │   ├── util.ts             # common utilities (string, className, time, ...)
 │   └── useLocalStorage.ts  # LocalStorage hook
 └── ui  #=================== UI-related
     ├── ui.tsx     # common ui (buttons, useClose, ...)
     ├── forms.tsx  # forms, dialogs (ErrorDlg, PendingDlg, ...)
     └── layout  #=========== Layout & routing
         ├── Layout.tsx    # <BrowserRouter>
         ├── Navbar.tsx    # <NavLink> Navigation bar menus
         └── UserMenu.tsx  # User menus
```

###### common files that can be copied to other projects

```bash
types.d.ts
common.d.ts
utils/util.ts
utils/svg.tsx         # react svg helper
ui/ui.tsx
ui/forms.tsx
ui/toggleDark.tsx     # dark mode switch
styles/paths.json     # svg path data
styles/App.scss       # sass main o
styles/_library.scss  # sass helper library
styles/_app.tw.scss   # tailwind custom classes
app/themeContext.tsx  # theme context: be sure to set tailwind.config.js too!
```

List the files path in the shell script `copy-commons.sh` and run it.

###### added packages

```bash
  "dependencies": {
# React Aria
    "@react-aria/button": "^3.3.0",
    "@react-aria/dialog": "^3.1.2",
    "@react-aria/focus": "^3.2.3",
    "@react-aria/overlays": "^3.6.0",
    "@react-aria/tooltip": "^3.1.1",
# React Stately
    "@react-stately/overlays": "^3.1.1",
    "@react-stately/toggle": "^3.2.1",
    "@react-stately/tooltip": "^3.0.2",
# React DropZone
    "react-dropzone": "^11.3.1",
# React Beautiful DnD
    "react-beautiful-dnd": "^13.0.0",
  },
  "devDependencies": {
    "@types/react-dropzone": "^5.1.0",
    "@types/react-beautiful-dnd": "^13.0.0"
  }
```



## Common Components

1. Layout and UIs (Buttons, Dialogs, Sidebars, ...)
2. Menus and Router (Private Router)
3. Theme Context (Dark Mode)
4. Authentication Context
5. API Abstraction Layer (Wrapper)
6. Redux Store

## Creating a New Project

1. react --template typescript, sass
2. tailwindcss
3. redux toolkit
4. react-router
5. firebase

#### React + TypeScript + sass + tailwindcss

```bash
$ npx create-react-app myapp --template typescript  # or redux-typescript
$ cd myapp
$ yarn add -D node-sass-chokidar  # enable sass
$ vim public/index.html public/manifest.json
$ cd src && rm logo.svg index.css  # under ./src/
$ mkdir app features styles
$ mv App.css styles/App.scss
$ npx browserslist@latest --update-db  # installs new caniuse-lite version; $ blu
# go to tailwindcss initializationcd
```

- TypeScript [Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html): Non-relative module imports - vscode should be run from the parent directory of the baseUrl `src`.

```json
{ // tsconfig.json - enable to use relative 
  "compilerOptions": {
    "baseUrl": "src",
```

```tsx
// src/App.tsx
import 'styles/App.scss';  // import './App.css';
```



### create-react-app templates

```bash
cra-template-[template-name]/
  README.md (for npm)
  template.json
  package.json
  template/
    README.md (for projects created from this template)
    gitignore
    public/
      index.html
    src/
      index.js (or index.tsx)
# To test a template locally:
$ npx create-react-app myapp --template file:../your_path/cra-template-[name]
```



```bash
# ui/toggleSlider.tsx
$ yarn add @react-stately/toggle @react-aria/button @react-types/button
# ui/Tooltip.tsx
$ yarn add @react-aria/interactions @react-aria/tooltip @react-stately/tooltip @react-types/tooltip
# utils/datetime.ts
$ yarn add date-fns date-fns-tz
```



### Modules - stqm 2021/07/28

```json
  "dependencies": {
    "@react-aria/button": "^3.3.2",
    "@react-aria/dialog": "^3.1.3",
    "@react-aria/focus": "^3.3.0",
    "@react-aria/interactions": "^3.4.0",
    "@react-aria/link": "^3.1.3",
    "@react-aria/overlays": "^3.6.3",
    "@react-aria/select": "^3.3.2",
    "@react-aria/tooltip": "^3.1.2",
    "@react-stately/overlays": "^3.1.2",
    "@react-stately/toggle": "^3.2.2",
    "@react-stately/tooltip": "^3.0.4",
    "@reduxjs/toolkit": "^1.6.0",
    "crypto-js": "^4.0.0",
    "date-fns": "^2.21.3",
    "date-fns-tz": "^1.1.4",
    "firebase": "^8.8.0",
    "katex": "^0.13.11",
    "react": "^17.0.2",
    "react-beautiful-dnd": "^13.1.0",
    "react-dom": "^17.0.2",
    "react-dropzone": "^11.3.2",
    "react-lite-yt-embed": "^1.2.6",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "typescript": "^4.3.4",
    "web-vitals": "^1.0.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/crypto-js": "^4.0.1",
    "@types/jest": "^26.0.15",
    "@types/katex": "^0.11.0",
    "@types/node": "^12.0.0",
    "@types/react": "^17.0.0",
    "@types/react-beautiful-dnd": "^13.0.0",
    "@types/react-dom": "^17.0.0",
    "@types/react-redux": "^7.1.16",
    "@types/react-router-dom": "^5.1.7",
    "autoprefixer": "^10.3.1",
    "chokidar-cli": "^2.1.0",
    "node-sass-chokidar": "^1.5.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.3.6",
    "postcss-cli": "^8.3.1",
    "tailwindcss": "^2.2.7",
    "type-coverage": "^2.17.5"
  }
```





### Special Syntax

```tsx
// Optional attributes using spread syntax
return (<div className="cls1" { ...opt && {style: {opacity: .2}} } />);

<div className={"abc" + (condition ? "d" : "e" } />         // is equivalent to:
<div {...{ className: "abc" + (condition ? "d" : "e") }} />
<div {...ccl("abc", condition, "d", "e")} />  // ccl returns the object

<div a={a} b={b} c={c} />    // is equivalent to
<div {...{a, b, c}} />       // when the variable name = prop name
```

#### clsx vs custom c* utility functions for classNames

- Do we need **clsx** or **classnames**? Or use my own **cCo, cL, cLo** functions for tailwindcss.

```tsx
// yarn add clsx
import clsx from 'clsx';
clsx('foo', true && 'bar', 'baz');  // Strings (variadic) => 'foo bar baz'
clsx({ foo:true, bar:false, baz:isTrue() });  // Objects => 'foo baz'
clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });  // Objects (variadic) => 'foo --foobar'
clsx(['foo', 0, false, 'bar']);  // Arrays => 'foo bar'
clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);  // Arrays (variadic) => 'foo bar baz hello there'
clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');  // Kitchen sink (with nesting) => 'foo bar hello world cya'
```

```tsx
// cCo: class with condition (base, if, then, else?) returning className object
// cL: class list returning string
const ChatBubble = ({ m, idSelf, isNewId, bdrClr }: {
  m: TMsg, idSelf: boolean, isNewId: boolean, bdrClr: string
}) => {
  return (
<div {...cCo(cL('text-sm grid grid-flow-row gap-1', idSelf ? 'text-white' : 'text-gray-700'),
      isNewId, 'mt-1', 'mt-0')}>
  <div {...cCo('group flex items-center', idSelf, 'flex-row-reverse')}>
    <div className="flex flex-col">
      {m.text &&
        <div {...cCo(cL('max-w-xs px-2 py-2 rounded-xl lg:max-w-md border-b', bdrClr),
              idSelf,
              'bg-blue-700 rounded-tr-none border-r-2',
              'text-gray-200 bg-gray-800 rounded-tl-none border-l-4')}
        >
```

- Instancing Component

```tsx
/**
 * call signature
 */
type TCompoSetOpen = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void; }) => JSX.Element;
type TCompoSetShow = ({ show, setShow }: { show: boolean; setShow: (show: boolean) => void; }) => JSX.Element;

interface ICompoCommon {
  id:    string;
  title: string;
  // show?: boolean;  // use show instead of open
};
interface ICompoOpen extends ICompoCommon {
  Compo: TCompoSetOpen;
};
interface ICompoShow extends ICompoCommon {
  Compo: TCompoSetShow;
};
// const ACompoObjs: (ICompoOpen | ICompoShow)[] = [
const ACompoOpen: ICompoOpen[] = [
  { id: 'SO08', title: "Side-over: New Project",               Compo: SideOvers08 },
...
  { id: 'M01',  title: "Modals: Centered with single action",  Compo: Modals01 },
...
];
const ACompoShow: ICompoShow[] = [
  { id: 'N01',  title: "Notifications: Simple",                Compo: Noti01 },
  { id: 'N03',  title: "Notifications: With actions below",    Compo: Noti03 },
...
];

export default function Example() {
  const [cid, setCid]  = useState<Nullable< TCompoId >>(null);
  const isOpen = (id: TCompoId) => id === cid;
  const setOpen = (open: boolean, id: TCompoId) => setCid(open ? id : null);
  const handleClick = (id: TCompoId) => setCid( isOpen(id) ? null : id );

return (
  <>
    {ACompoOpen.map(El =>
      <El.Compo key={El.id} open={isOpen(El.id)} setOpen={open => setOpen(open, El.id)} />
     )}
    {ACompoShow.map(El =>
      <El.Compo key={El.id} show={isOpen(El.id)} setShow={open => setOpen(open, El.id)} />
     )}
  </>
);
}
```



```tsx
      <El.Compo key={El.id}
        {...({
              open:    isOpen(El.id),
              setOpen: open => setOpen(open, El.id)
            })}
      />)}
```



### HOCs - Higher Order Components

- A HOC is a function that takes a component and returns a new component that is a technique for reusing component logic. Whereas a component transforms props into UI, a HOC transforms a component into another component.
- **Enhancers**: wrap a component with additional functionality/props

```typescript
declare namespace React {
  type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
```

```tsx
interface ILoadingProps { loading: boolean; }

const withLoading = <P extends object>(  // <P> will not work for JSX, workaround
  WrappedCompo: React.ComponentType<P>
): React.FC<P & ILoadingProps> => ({ loading, ...props }: ILoadingProps) =>
  loading ? <div>Loading...</div> : <WrappedCompo { ...props as P } />;

const HeavyPage = () => <div>This is a heavy page.</div>;
export default withLoading(HeavyPage);
```

```tsx
<HeavyPage loading={loading} />
```

- **Injectors**: inject props into a component

```tsx
interface TUser { user: string; }

const withUser = <P extends object>(
  WrappedCompo: React.ComponentType<P & IUser>
) => {
  const user = sessionStorage.getItem("user");
  return (props: P) => <WrappedCompo user={user} {...props} />;
}

const UserPage = (props: IUser) => (
  <div className="user-container">
    <p>My name is {props.user}.</p>
  </div>
);
export default withUser(UserPage);
```

#### Render Props

Render Prop referes to a technique for sharing code between React components using a prop whose value is a function. render-invoked prop (or function). 

```tsx
export interface ISdeDrawerProps {
  children?: (closeCB: () => void) => React.ReactNode;  // render prop
}
const SideDrawer = ({ children }: ISideDrawerProps) => {
  return (
    <aside {...{ref}}>
      {children?.(closeCB)}
    </aside>  
  );
}
// Children needs to call parent's closeCB function
const LeftSideDrawer = () =>
  <SideDrawer>
    {closeCB =>
      <div>My content
        <CloseButton onPress={() => closeCB()} />
      </div>}
  </SideDrawer>
```



#### Function as Children

```jsx
<Mouse>
  {mouse => <p>The mouse position is {mouse.x}, {mouse.y}</p>}
</Mouse>
```



### The Effect Hook

- The array in the second argument should include all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders.
- Passing an empty array ([]) will run an effect and clean it up only once (on mount and unmount). It tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run.

```tsx
React.useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {  // cleanup
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  }
}, [props.friend.id]);  // Only re-subscribe if props.friend.id changes
```

##### react-hooks/exhaustive-deps

```typescript
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // This effect depends on the `count` state
    }, 1000;
    return () => clearInterval(id);
  }, []); // 🔴 Bug: `count` is not specified as a dependency
  return <h1>{count}</h1>;
}
// Use the functional update form of setState: setCount(c => c + 1);
```

The 'setDarkMode' function makes the dependencies of useLayoutEffect Hook (at line 51) change
on every render. To fix this, wrap the definition of 'setDarkMode' in its own useCallback() Hook  react-hooks/exhaustive-deps

- Dan Abramov - [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

#### async function in useEffect

```jsx
const sleep = ms => new Promise(r => setTimeout(r, ms));

useEffect(() => {
  const f = async () => {
    await new Promise(r => setTimeout(r, 1000));
    console.log('side effect!');
  };
  f();
}, []);
```



### Context API

##### app/userContext.ts

```typescript
export const UserContext = React.createContext<Nullable<TUser>>(null);
export const useUser = () => useContext(UserContext);
```

##### App.tsx - Context Provider

```tsx
function App() {
  const auth = useAuthState();  // encapsulates firebase.auth().onAuthStateChanged
  return (
    <UserContext.Provider value={auth.user}>
      <Layout />
    </UserContext.Provider>
  );
}
```

##### features/layout/Layout.tsx - Consumer with Hooks

```tsx
import { useUser } from 'app/userContext';

return (
  <BrowserRouter>
    <Switch>
      { Routes.map((rt, i) => <ARoute key={i} authLv={useUser() ? 1 : 0} {...rt} /> }
    </Switch>
  </BrowserRouter>
);
```

##### features/layout/Layout.tsx - Consumer without Hooks

```tsx
import { UserContext } from 'app/userContext';

return (
  <UserContext.Consumer>
    { user =>
      <BrowserRouter>
        <Switch>
          { Routes.map((rt, i) => <ARoute key={i} authLv={user ? 1 : 0} {...rt} /> }
        </Switch>
      </BrowserRouter>
    }
  <UserContext.Consumer>
);
```



### Cross-Origin Resource Sharing (CORS)

Should be set in the server-side? for example, GitHub Pages. [MSDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

> **Cross-origin resource sharing** (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. **This is set on the server-side and there is nothing you can do from the client-side to change that setting, that is up to the server/API. There are some ways to get around it tho.**

- GitHub Pages are CORS enabled by default. Access-Control-Allow-Origin: *`

`document.cookie = 'cross-site-cookie=stq; SameSite=None; Secure';`

### Core Web Vitals by Google

[Measuring Performance](https://create-react-app.dev/docs/measuring-performance/)

- **LCP - Largest Contentful Paint**: measures *loading* performance. (<2.5s)

- **FID - First Input Delay**: measures *interactivity*. (<100ms)

- **CLS - Cumulative Layout Shift**: measures *visual stability*. (<0.1s)


### Server Components

[2020-12-21] Server Components are very different from what Next.js does today (traditional SSR). Here's a few differences:

- Server Components code is *never sent to the client*. By comparison, with traditional SSR all of the component code gets sent to the client anyway in the JS bundle.

- Server Components let you access the backend directly *from anywhere in the tree*. In Next.js, you can access the backend inside getServerProps(), but that only works at the top level page level, which means componentization is very limited. E.g. random npm component can't do that.

- Server Components can be *refetched without losing the Client state inside of their tree*. Because the primary transport is richer than HTML, we can refetch a server-rendered part (e.g. a search result list) without blowing away the state inside (e.g. the search input text, focus and selection).

That said, it's not a dig at Next.js -- the whole goal is to enable Next.js and similar frameworks to be much better.

##### Referencing resources in the Public Folder

```tsx
<img className="..." src={process.env.PUBLIC_URL + 'icon.png'} alt="" />
```

## Context API

- Authentication, Theme(Dark Mode), Languge/Locale

### Forms

- [Formik](https://formik.org/)

### Drag and Drop

- [Beautiful and Accessible Drag and Drop with react-beautiful-dnd](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd) - [examples](https://react-beautiful-dnd.netlify.app/?path=/story/single-vertical-list--basic)
- [react-dropzone](https://react-dropzone.js.org/) - Simple react hoot to ccreate a HTML5-compliant drag'n'drop zone for files

```typescript
// typescript/lib/lib.dom.d.ts
/** A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system. */
interface Blob {
  readonly size: number;
  readonly type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
  text(): Promise<string>;
}

// file-selector/dist/file.d.ts
interface DOMFile extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
export interface FileWithPath extends DOMFile {
  readonly path?: string;
}

// application
export interface IFilePreview extends FileWithPath {
  preview: string;
};
```



## Jest

```bash
$ yarn add --dev jest  # No need for CRA: @testing-library/jest-dom
```

```javascript
const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```



## Storybook

```bash
$ npx -p @storybook/cli sb init
```



## Deployment

##### To Serve on the local NVIDIA Ubuntu Server

```bash
# ~/D/P/serve-https
#!/bin/zsh
if [[ -z $1 ]]; then
  print "$0 project_folder_name port_num(3000~)"
  exit
fi
cd ~/D/P/$1
git pull
yarn             # update dependent npm packages
yarn build
serve -l $2 -s build -n \   # -s,--single: Rewrite all not-found requests to index.html
---ssl-cert ~/cert/letsencrypt/fullchain6.pem \  # to serve HTTPS
---ssl-key  ~/cert/letsencrypt/privkey6.pem
```

##### tmuxinator script - `$ tmuxinator edit serve`

```yaml
name: serve
root: ~/
windows:
  - dual:
    layout: even-vertical
    panes:
      - pane1:
        - cd ~/D/P
        - date
        - ./serve-https stqm 3000
      - pane2:
        - cd ~/D/P
        - date
        - ./serve-https twlab 3001
      - pane3:
        - ssh sq011
        - cd D/Python/pistreaming/
        - ./server.py
      - pane4:
        - tmux resize-pane -U 20
        - nvidia-smi
        - cd ~/D/P
```



- [fetch](https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples)

## libraries

- [React-pdf](https://react-pdf.org/) - React renderer for creating PDF files on the browser and server.

### react-dropzone

- [react-dropzone](https://react-dropzone.js.org/)

When the DnD FileOpen button cannot be shown on the same scope as `<Dropzone />`, we need to hack a way to access open function of Dropzone.

```tsx
import Dropzone, { DropzoneRef, } from 'react-dropzone';  // Dropzone component case

// to call open (File Open UI) from the consumer(child component) using DropzoneRef
// getRootProps, getInputProps are passed to children as render props
const Consumer = () => {
  const dzRef = createRef<DropzoneRef>();
  return (
  	<Dropzone ref={dzRef} {...cLo("flex-none")}
      noClick
      noKeyboard
      multiple={false}
      accept="image/*"
      maxSize={10*1024*1024}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps(cLo("flex flex-row items-center p-2 border-t"))}>
          <input {...getInputProps()} />
        </div>
        <button type="button" className={btnCls} onClick={() => dzRef.current?.open()}>
          <SvgIconFull Path="frame_pic" vLen={20} />
        </button>
      )}
    </Dropzone>
  );
}
```

```tsx
import { useDropzone, } from 'react-dropzone';  // hooks

interface IDnDWrapperProps extends IClassNameObj {
  accept?:   string;                         // file types to accept
  onFileCB?: (file?: IFilePreview) => void;  // callback on File load
  children?: (onFileOpen: () => void) => React.ReactNode;  // render prop for DnD open
};  // onFileOpen will be passed to children so that it can be called back

export const DnDWrapper =
  forwardRef<HTMLDivElement, IDnDWrapperProps >(
  ({
    className,
    accept = 'image/*',
    onFileCB,
    children
  }, ref) =>
{
  const [files, setFiles] = useState<IFilePreview[]>([]);

  const onDrop: TOnDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) {
      setFiles(acceptedFiles.map(f =>
        Object.assign(f, { preview: URL.createObjectURL(f) }) )
      );
    }
    onFileCB?.(acceptedFiles[0] as unknown as IFilePreview);
  }, [onFileCB]);

  const {
    getRootProps, getInputProps, open,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    noClick:    true,
    noKeyboard: true,
    multiple:   false,  // only one file is allowed to be picked
    accept,
    maxSize:    10*1024*1024,  // maximum allowed filesize in bytes
    onDrop
  });

  useEffect(() => {
    return () => {
      files.forEach(f => URL.revokeObjectURL(f.preview));  // cleanup
    }
  }, [files]);

  const onFileOpen = () => { open(); }

  return (
    <div {...getRootProps({...{ref, className}})}>
      <div {...cLo("border-2",
        isDragActive && "border-dashed",
        isDragAccept && "border-green-400",
        isDragReject && "border-red-400")}
      >
        {children?.(onFileOpen)}
      </div>
      <input {...getInputProps()} />
    </div>
  );
});
```



## Testing

1. Unit test
2. Integration test
3. End-to-end test

### Jest

```bash
$ yarn add -D react-test-renderer     # for snapshot test
$ yarn add -D @testing-library/react  # for DOM test
```



### React Testing Library

- [react-testing-library](https://github.com/testing-library/react-testing-library)




### Mock Service Worker

[msw](https://mswjs.io/) API mocking of the next generation - Mock by intercepting request on the network level. Seamlessly reuse the same mock definition for testing, development, and debugging.

```bash
$ yanr add msw --dev
```



- [Placeholder.com](https://placeholder.com/)



## Tips

- Running build on the NVIDIA local machine and accessing from the remote network

```bash
$ yarn build  # on the NVIDIA ubuntu machine
$ serve -s -n -l 3000 build  # default port is 5000 but its not open in my AWS
$ sudo ufw status      # check the firewall for the open ports
$ sudo ufw allow 3000  # if the port is not open
```

From the remote machine, open url `api.spacetimeq.com:2030` of which the port 2030 in the public AWS server and then tunnelled to 3000 of the private NVIDIA machine. 



## Frameworks

- Next.js
- Blitz



## Resources from James

- [How](https://youtu.be/iRaelG7v0OU) to Build a Google Docs Clone with React, Socket.io, and MongoDB - [git](https://github.com/WebDevSimplified/google-docs-clone) [Quill Rich Text Editor](https://quilljs.com/)
- [Let's](https://youtu.be/1ZdFJ0701QI) Build Google Docs with React.js (Next.js, Rich Text Editor, TailwindCSS & Firebase)
- [jitsi](https://jitsi.org/) - Free Video Conferencing Software for Web & Mobile
- React [Icons](https://react-icons.github.io/react-icons)
- React Checkbox [Tree](https://www.npmjs.com/package/react-checkbox-tree)
- MERN Stack Project | Ecommerce Website | Admin Category Update - [20](https://www.youtube.com/watch?v=PaPQrbYttsY)



#### Contents Builder

- https://www.plasmic.app/
- https://www.builder.io/
- https://reactbricks.com/

## Issues

```tsx
if (!process.env.NODE_ENV ||
     process.env.NODE_ENV === 'production') {
  console.log = function() {}   // suppress all console.log in production mode
}
```

- [2020-11-26] All the console outputs are refreshed after `<form onSubmit />`.

  > **Solution**: Need to insert `ev.preventDefault()` to stop the whole page refresh on the form submit.

- [2020-12-17] No reducer provided for key "auth" - When using `useSelect(selectAuth)` in the `<BrowserRouter>` component, auth reducer disappears mysteriously. Is there a conflict using react-redux select functions with react-router?

  > **Solution**: To avoid this conflict between the Redux and react-router, use React Context API. Set the auth state at the outer block of `<BrowserRouter>` and save to the context using `React.createContext`. Then fetch using `React.useContext` in the react-router component. 

- [2021-01-06] Old react pjt fails to compile: upgrade react-scripts in `package.json` 2.?.? -> ^3.1.0

- [2021-01-13] onloadwff.js: Assertion failed: Input argument is not an HTMLInputElement

  > **Solution**: LastPass Chrome extension -> This Can Read and Change Site Data -> When You Click the Extension

- [2021-01-20] Only in Ubuntu, buid error! Error from chokidar (/home/soomin/D/P/stqm/node_modules/@firebase/component/dist): Error: ENOSPC: System limit for number of file watchers reached, watch '/home/soomin/D/P/stqm/node_modules/@firebase/component/dist'

  > echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

- [2021-02-01] When Korean or Japanese Input mode, just detecting enter key=13 and sending text produces duplicate last letter in chat input.

  > [JavaScript で日本語の変換確定とその他のリターンを識別する方法](https://gotohayato.com/content/496/)
  > Element: [compositionstart event](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)
  >
  > [IME（全角）入力におけるjsイベント現状調査](https://qiita.com/darai0512/items/fac4f166c23bf2075deb)

- [2021-02-16] When removed `import React from 'react'`, TypeScript warns: React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

  > `tsconfig.json` "jsx": "react" -> "react-jsx". [TypeScript 4.1](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#jsx-factories) supports React 17's jsx and jsxs factory functions through two new options for the jsx compiler option: `react-jsx`, `react-jsxdev`

- [2021-02-24] react-beautiful-dnd: A setup problem was encountered. Invariant failed. provided.innerRef has not been provided with a HTMLElement. (beautiful-kanban project)

  > The "[innerRef](https://styled-components.com/docs/api#innerref-prop)" prop was removed in styled-components v4 in favor of the [React 16 forwardRef API](https://reactjs.org/docs/forwarding-refs.html). Just use the normal ref prop instead.

- [2021-07-12] Hanging at 'Files successfully emitted, waiting for typecheck results...' when edited *.scss files.

  > [issue](https://github.com/facebook/create-react-app/issues/10315): Compilation stuck caused by race condition in TypeScript + web workers context. Tips: To avoid stuck, there should be modifications in *.ts or *.tsx too when recompiling.

- [2021-08-05] Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

  > ​	called setValue with undefined. Changed to  `setText(res.text || '');`
  >
  > As indicated in the warning, the cause was caling setState with undefined value.

  

- [2021-08-05] `<form onSubmit={ev => onFormSubmit(ev)} />` not works. OK button is outside of the form element. Pressing OK should call onSubmit.

  > onSubmit needs to be called since all the controlled inputs are synchronizing form's parent component's states. onSubmit was called only when ENTER key was pressed.

- [2021-08-05] Property 'ok' does not exit on type `Promise<Response>`.

- [2021-08-24] React double renders onClick when the button is the child of <Label>.

  > When a <label> is clicked or tapped and it is associated with a form control, the resulting click event is also raised for the associated control.
  >
  > Just add type attribute to the button with a value of button
  >
  > `<button type='button' ... />` By default, button elements are of the type "submit" which causes them to submit their enclosing form element (if any). Changing the type to "button" prevents that.

- [2022-08-03] `node-sass` issue after node v16

  > Failed to compile.
  >
  > ./src/styles/App.scss (./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/styles/App.scss)
  > Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (93)
  > For more information on which environments are supported please see:
  > https://github.com/sass/node-sass/releases/tag/v4.14.1
  >
  > `yarn remove node-sass react react-dom react-scripts`
  >
  > `yarn add -D sass npm-run-all choikidar-cli typescript`
  >
  > ```bash
  > # package.json
  > "scripts": {
  > "build:sass": "sass src/App.scss src/App.css",
  > "watch:sass": "chokidar 'src/*.scss' 'src/*/*.tsx' --ignore 'src/*.css' -c 'yarn run build:sass'",
  > "start": "npm-run-all build:sass --parallel start:react",
  > "build": "npm-run-all build:sass --parallel build:react",
  > "start:react": "react-scripts start",
  > "build:react": "react-scripts build",
  > "test": "react-scripts test",
  > "eject": "react-scripts eject"
  > }
  > ```
  >
  > 

- [2022-08-17] TypeScript error: Property 'children' does not exist on type 'ReactNode'

  >React >= 18, `FunctionComponent` interface has changed to become:
  >
  >```tsx
  >interface FunctionComponent<P = {}> {
  >(props: P, context?: any): ReactElement<any, any> | null;
  >propTypes?: WeakValidationMap<P> | undefined;
  >contextTypes?: ValidationMap<any> | undefined;
  >defaultProps?: Partial<P> | undefined;
  >displayName?: string | undefined;
  >}
  >type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
  >```
  >
  >`PropsWithChildren` type is omitted from the `props` type of a `FunctionComponent` after React 18.
  >
  >

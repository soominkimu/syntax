
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

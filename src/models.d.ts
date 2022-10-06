/*=============================================================================
 models.d.ts - 

 (C) 2022 SpacetimeQ INC
=============================================================================*/
// Need 'import' to avoid 'File ... is not a module. TS2306' error.
import React from 'react';

interface INavigationEl {
  title: string;
  links: {
    title: string;
    href:  string;
  }[];
};


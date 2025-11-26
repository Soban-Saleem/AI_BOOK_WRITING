import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // We will manually create the sidebar for our book
  bookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part 1: The Paradigm Shift',
      items: [
        'chapter-1',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: The AI Author\'s Toolkit',
      items: [
        'placeholder',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: The Future of Interactive Content',
      items: [
        'placeholder',
      ],
    },
  ],
};

export default sidebars;

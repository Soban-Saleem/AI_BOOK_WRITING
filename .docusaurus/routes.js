import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI_BOOK_WRITING/docs',
    component: ComponentCreator('/AI_BOOK_WRITING/docs', '456'),
    routes: [
      {
        path: '/AI_BOOK_WRITING/docs',
        component: ComponentCreator('/AI_BOOK_WRITING/docs', '635'),
        routes: [
          {
            path: '/AI_BOOK_WRITING/docs',
            component: ComponentCreator('/AI_BOOK_WRITING/docs', '36a'),
            routes: [
              {
                path: '/AI_BOOK_WRITING/docs/chapter-1',
                component: ComponentCreator('/AI_BOOK_WRITING/docs/chapter-1', 'af9'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/AI_BOOK_WRITING/docs/intro',
                component: ComponentCreator('/AI_BOOK_WRITING/docs/intro', 'c34'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/AI_BOOK_WRITING/docs/placeholder',
                component: ComponentCreator('/AI_BOOK_WRITING/docs/placeholder', '48c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/AI_BOOK_WRITING/docs/table-of-contents',
                component: ComponentCreator('/AI_BOOK_WRITING/docs/table-of-contents', '4d6'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/AI_BOOK_WRITING/',
    component: ComponentCreator('/AI_BOOK_WRITING/', '5be'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

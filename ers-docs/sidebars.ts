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
  // Manually define the sidebar structure
  tutorialSidebar: [
    'intro',
    'quick-installation',
    {
      type: 'category',
      label: '🟢 基本導入手順',
      collapsed: false,
      items: [
        'getting-started',
        'add-prefab',
        'add-entrance-room',
        'world-upload',
      ],
    },
    {
      type: 'category',
      label: '🟠 応用項目',
      collapsed: false,
      items: [
        'custom-entrance-room',
        'control-panel',
        'hide-udon-syncing',
      ],
    },
  ],
};

export default sidebars;

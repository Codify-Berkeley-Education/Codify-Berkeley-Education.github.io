module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://codify-berkeley-education.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  favicon: 'img/favicon.ico',
  organizationName: 'Codify-Berkeley-Education', // Usually your GitHub org/user name.
  projectName: 'Codify-Berkeley-Education.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch to deploy to.
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
export default {
  title: "Dining Philosophers",
  description: "식사하는 철학자들",
  base: "/dining-philosophers/",
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Team-Psyduck/dining-philosophers",
      },
    ],
  },
};

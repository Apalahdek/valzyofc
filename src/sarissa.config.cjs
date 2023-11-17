export default {
  siteTitle: "valzofc",
  siteDescription: "Info seputar valzofc",
  favicon: "/favicon.ico",
  siteImagePath: "/images/sarissa.png",
  footer: "© 1967 - 2022 ValzOfc",
  dateFormat: "dd.MM.yyyy HH:mm",
  socialMedia: {
    facebook: "-",
    twitter: "-",
    linkedin: "ismail-özçelik",
    github: "iozcelik",
  },
  pageSize: 5,
  categories: [
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "button", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};

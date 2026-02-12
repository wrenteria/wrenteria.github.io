// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected research and software projects in coastal engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-articles",
          title: "articles",
          description: "Selected journal and preprint articles (BibTeX-driven).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/articles/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "Visual highlights from research and coastal engineering workflows.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "projects-celerisai",
          title: 'CelerisAI',
          description: "Differentiable coastal hydrodynamics and AI for nearshore inverse problems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/celerisai/";
            },},{id: "projects-dolwns",
          title: 'DOLWNS',
          description: "Differentiable numerical-solver research with automatic differentiation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dolwns/";
            },},{id: "projects-geoclawtools",
          title: 'GeoClawTools',
          description: "Tools for coastal simulation processing and analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geoclawtools/";
            },},{id: "projects-gis2num-interoperability",
          title: 'GIS2NUM Interoperability',
          description: "GIS and numerical model format interoperability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gis2num/";
            },},{id: "projects-shore-normal-transect",
          title: 'Shore Normal Transect',
          description: "Shore-normal transect workflows for coastal applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shore-normal-transect/";
            },},{id: "projects-transfer-functions-development",
          title: 'Transfer Functions Development',
          description: "Coastal transfer-function experiments and visual workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/transfer-functions/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%6A%72%65%6E%74%65%72%69%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wrenteria", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/wrenteria", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/wrenteria", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

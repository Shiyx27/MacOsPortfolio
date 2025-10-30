import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "/img/ui/avatar.jpg",
        link: "https://shiyx27.github.io/MyPortfolio/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "/img/sites/github.svg",
        link: "https://github.com/Shiyx27"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "/img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/shiyamaladevi-r-s-shiy27/"
      },
      {
        id: "my-spotify",
        title: "Spotify",
        img: "/img/sites/spotify.svg",
        link: "https://open.spotify.com/playlist/33ZALB7QKvSEoACd0xKoY1?si=QH2a24tIQsSc_-2WeTw3zA"
      },
      {
        id: "my-google-scholar",
        title: "Scholar",
        img: "/img/sites/google-scholar.svg",
        link: "https://scholar.google.com/citations?hl=en&user=_LB1xLoAAAAJ"
      },
      {
        id: "my-email",
        title: "Email",
        img: "/img/sites/gmail.svg",
        link: "mailto:shiyamaladevirs@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "/img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        img: "/img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/shiyamaladevi-r-s-shiy27/"
      },
      {
        id: "orcid",
        title: "ORCID",
        img: "/img/sites/orcid.svg",
        link: "https://orcid.org/0009-0008-8536-7667"
      }
    ]
  }
};

export default websites;

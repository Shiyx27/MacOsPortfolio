import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a mermaid lost in human world..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-fa-solid:briefcase",
        excerpt: "I am a fairy princess, yet I am bound to work."
      },
      
      {
        id: "more-about-me",
        title: "Okayyy...I did em",
        file: "markdown/more-about-me.md",
        icon: "i-octicon:browser",
        excerpt: "Something more about me..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "pizzaforlife",
        title: "PizzaForLife",
        file: "https://raw.githubusercontent.com/Shiyx27/PizzaForLife/main/README.md",
        icon: "i-fa-solid:pizza-slice",
        excerpt: "A pizza ordering website.",
        link: "https://github.com/Shiyx27/PizzaForLife",
        repo: "https://github.com/Shiyx27/PizzaForLife"
      },
      {
        id: "environmental-guardian",
        title: "Environmental Guardian Live",
        file: "https://raw.githubusercontent.com/Shiyx27/Xylem_Hackathon_EnvironmentalGuardianGame/main/README.md",
        icon: "i-fa-solid:leaf",
        excerpt: "Interactive climate action game with real-time emergency monitoring of 200+ global coastal cities.",
        link: "https://environmentalguardian.onrender.com/",
        repo: "https://github.com/Shiyx27/Xylem_Hackathon_EnvironmentalGuardianGame"
      },
      {
        id: "bedtime-story-teller",
        title: "BedTimeStoryTeller",
        file: "https://raw.githubusercontent.com/Shiyx27/BedTimeStoryTeller/main/README.md",
        icon: "i-fa-solid:book",
        excerpt: "A bedtime story teller.",
        link: "https://github.com/Shiyx27/BedTimeStoryTeller",
        repo: "https://github.com/Shiyx27/BedTimeStoryTeller"
      },
      {
        id: "seizure-detection",
        title: "Epileptic Seizure Detection",
        file: "https://raw.githubusercontent.com/Shiyx27/NeuroInformaticsSummerInternship2025/main/README.md",
        icon: "i-fa-solid:brain",
        excerpt: "Real-Time Epileptic Seizure Detection on Edge Devices Using Lightweight 1D CNN.",
        link: "https://github.com/Shiyx27/NeuroInformaticsSummerInternship2025",
        repo: "https://github.com/Shiyx27/NeuroInformaticsSummerInternship2025"
      },
      {
        id: "starwars-photobooth",
        title: "StarWars Photobooth",
        file: "https://raw.githubusercontent.com/Shiyx27/StarWarsThemed/main/README.md",
        icon: "i-fa-brands:galactic-republic",
        excerpt: "A StarWars themed photobooth.",
        link: "https://starwars-photobooth-2rtkblie7-shiyx27s-projects.vercel.app/",
        repo: "https://github.com/Shiyx27/StarWarsThemed"
      }
    ]
  }
];

export default bear;

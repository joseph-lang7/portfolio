import carRental from "/project-images/car-rental.png";
import gymUnity from "/project-images/gym-unity.png";
import hotel from "/project-images/hotel.png";
import recipe from "/project-images/recipe.png";

export const HERO_TEXT =
  "I am a passionate full stack developer from California. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB.";

export const ABOUT_TEXT =
  "👋 Hey there! I'm a full-stack software engineer that is all about making code as clear and concise as possible. Think of it like writing a story – it should be easy to follow and hard to put down. My journey into software engineering began with an innate curiosity of how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and seek feedback to fuel my growth. Outside of coding, I enjoy exercising, learning new technologies, and spending time with family.";

export const PROJECTS = [
  {
    title: "Gym Unity",
    image: gymUnity,
    description:
      "A user interface application that allows users to view class schedules, membership options, and other resources to help them achieve their fitness goals.",
    technologies: ["React", "Vite", "Tailwind"],
    liveDemo: { title: "Live Demo", href: "https://gymunity-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Gym-Unity" },
  },
  {
    title: "Car Rental",
    image: carRental,
    description:
      "A user interface application that allows users to rent, search, compare, and reserve cars.",
    technologies: ["React", "Vite", "Tailwind"],
    liveDemo: { title: "Live Demo", href: "https://carrental-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Car-Rental" },
  },
  {
    title: "Hotel",
    image: hotel,
    description:
      "A user interface application that allows users to book hotels and view hotel rooms and amenities.",
    technologies: ["Next.js", "Tailwind"],
    liveDemo: { title: "Live Demo", href: "https://hotel-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Hotel" },
  },
  {
    title: "Recipe",
    image: recipe,
    description:
      "A full-stack app that allows users to log in/sign up and view, create, and save recipes.",
    technologies: ["React", "Tailwind", "Express", "Node.js", "MongoDB"],
    liveDemo: { title: "Live Demo", href: "https://recipe-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Recipe" },
  },
];

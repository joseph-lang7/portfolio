import carRental from "/project-images/car-rental.png";
import gymUnity from "/project-images/gym-unity.png";
import hotel from "/project-images/hotel.png";
import recipe from "/project-images/recipe.png";
import bookAway from "/project-images/book-away.png";
import sassLandingPage from "/project-images/sass-landing-page.png";
export const HERO_TEXT =
  "I am a passionate full stack engineer from California. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB.";

export const ABOUT_TEXT =
  "👋 Hey there! I'm all about making code as clear and concise as possible. Think of it like writing a story – it should be easy to follow and hard to put down. My journey into software engineering began with an innate curiosity of how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and seek feedback to fuel my growth. Outside of coding, I enjoy exercising, learning new technologies, and spending time with my family.";

export const PROJECTS = [
  {
    title: "Book Away",
    image: bookAway,
    description:
      "A full-stack app that allows users to create listings, search listings, and book listings.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Playwright",
      "Express.js",
    ],
    liveDemo: { title: "Live Demo", href: "https://bookaway-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Book-Away" },
  },
  {
    title: "SaaS Landing Page",
    image: sassLandingPage,
    description:
      "A front-end application that allows users to explore SaaS product details.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveDemo: {
      title: "Live Demo",
      href: "https://sass-landing-page-jl.netlify.app/",
    },
    repo: {
      title: "Code",
      href: "https://github.com/joseph-lang7/SaaS-Landing-Page",
    },
  },
  {
    title: "Gym Unity",
    image: gymUnity,
    description:
      "A front-end application that allows users to view class schedules, membership options, and other resources to help them achieve their fitness goals.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: { title: "Live Demo", href: "https://gymunity-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Gym-Unity" },
  },
  {
    title: "Car Rental",
    image: carRental,
    description:
      "A front-end application that allows users to rent, search, compare, and reserve cars.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: { title: "Live Demo", href: "https://carrental-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Car-Rental" },
  },
  {
    title: "Hotel",
    image: hotel,
    description:
      "A front-end application that allows users to book hotels and view hotel rooms and amenities.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveDemo: { title: "Live Demo", href: "https://hotel-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Hotel" },
  },
  {
    title: "Recipe",
    image: recipe,
    description:
      "A full-stack app that allows users to log in/sign up and view, create, and save recipes.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
    ],
    liveDemo: { title: "Live Demo", href: "https://recipe-jl.netlify.app/" },
    repo: { title: "Code", href: "https://github.com/joseph-lang7/Recipe" },
  },
];

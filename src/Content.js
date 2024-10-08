// import images
import Hero_person from "./assets/images/Hero/profile-pic.png";
import Hero_person1 from "./assets/images/Hero/profile1.png";

import java from "./assets/images/Skills/java.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import redux from "./assets/images/Skills/redux.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import firebase from "./assets/images/Skills/firebase.png";
import github from "./assets/images/Skills/github.png";

import project1 from "./assets/images/Projects/blogger.png";
import project2 from "./assets/images/Projects/mail-box.png";
import project3 from "./assets/images/Projects/ecommerce.png";
import project4 from "./assets/images/Projects/expense-tracker.png";
import project5 from "./assets/images/Projects/tictoc.png";
import project6 from "./assets/images/Projects/amazone.png";
import project7 from "./assets/images/Projects/todo.png";
import gemini from "./assets/images/Projects/gemini.png";
import tinder from "./assets/images/Projects/tinder.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#AboutUs",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: RiProjectorLine,
    },
    {
      link: "#project",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front-End Developer",
    firstName: "VAIBHAV",
    LastName: "DHAMANAGE",
    btnText: "Hire Me",
    image: Hero_person1,
    hero_content: [
      {
        count: "10+",
        text: "Real World Projects Build while Learning",
      },
      {
        count: "100+",
        text: "Solve DSA Coding problems",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "Data & Algorithms",
        logo: java,
      },
      {
        name: "Javascript",
        para: "Programming Language",
        logo: javascript,
      },
      {
        name: "HTML",
        para: "HyperText Markup Language",
        logo: html,
      },
      {
        name: "CSS",
        para: "Cascading Style Sheet",
        logo: css,
      },
      {
        name: "React js",
        para: "Javascript Library",
        logo: reactjs,
      },
      {
        name: "Redux js",
        para: "Javascript Library",
        logo: redux,
      },
      {
        name: "Tailwind",
        para: "CSS Framework",
        logo: tailwind,
      },
      {
        name: "Bootstrap",
        para: "CSS Framework",
        logo: bootstrap,
      },
      {
        name: "GitHub",
        para: "Open source software",
        logo: github,
      },
      {
        name: "Firebase",
        para: "Database",
        logo: firebase,
      },
    ],
    icon: MdArrowForward,
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Ecommerec Website",
        image: project3,
        description: "Ecommerce shopping website",
        link: "https://e-shoppe-vaibhavd.netlify.app/",
        git: "https://github.com/VaibbhavD/Shopping-Website",
      },
      {
        title: "tinder",
        image: tinder,
        description: "tinder Dating App",
        link: "https://tinder-vaibhavd--neon.vercel.app/",
        git: "https://github.com/VaibbhavD/Tinder-Clone",
      },
      {
        title: "Gemini AI",
        image: gemini,
        description: "Google Gemini AI Version",
        link: "https://geminiai-vaibhavd.netlify.app/",
        git: "https://github.com/VaibbhavD/Chat-GPT",
      },
      {
        title: "BloGGeR Website",
        image: project1,
        description: "blog website anyone can post and see posts.",
        link: "https://blogger-project.vercel.app/",
        git: "https://github.com/VaibbhavD/BloGGeR-MegaProject",
      },
      {
        title: "Mail-Box Client",
        image: project2,
        description: "Biuld realtime Mail Box",
        link: "https://mail-box-two.vercel.app/",
        git: "https://github.com/VaibbhavD/Mail-Box-Client",
      },

      {
        title: "Expense Tracker",
        image: project4,
        description: "Build Shopping Ecommerce website",
        git: "https://github.com/VaibbhavD/Expense-Tracker-ReactJs-Redux",
      },
      {
        title: "Tic-Toc-Toe Game",
        image: project5,
        description: "Tic Toc Toe Game",
        link: "https://tic-toc-toe-sigma.vercel.app/",
        git: "https://github.com/VaibbhavD/Tic-Toc-Toe",
      },
      {
        title: "Todo App",
        image: project7,
        description: "Todo app",
        link: "https://todoapp-vaibhavd.netlify.app/",
        git: "https://github.com/VaibbhavD/Todo-App",
      },
      {
        title: "Amazone Page Design",
        image: project6,
        description: "Amazone Page Design HTML/CSS",
        link: "https://amazoneclonevaibhavd.netlify.app/",
        git: "https://github.com/VaibbhavD/AmazonDemo",
      },
    ],
  },

  Hireme: {
    title: "About Me",
    subtitle: "Web Developer",
    // image2: Hireme_person2,
    para: "Hello! I'm Vaibhav Dhamanage, a passionate and dedicated fresher front-end developer with a strong foundation in HTML, CSS, JavaScript, React, and Redux. I am enthusiastic about creating intuitive and visually appealing user interfaces that enhance the overall user experience.I am excited about the opportunity to embark on this journey as a front-end developer and am eager to leverage my skills and enthusiasm to make a meaningful impact. Let's collaborate and build something great together!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "vaibhavdhamanage11@gmail.com",
        icon: GrMail,
        link: "mailto:vaibhavdhamanage13@gmail.com",
      },
      {
        text: "+91 8208428378",
        icon: MdCall,
        link: "https://wa.me/8208428378",
      },
      {
        text: "Linkedin",
        icon: AiOutlineLinkedin,
        link: "https://www.linkedin.com/in/vaibhav-dhamanage-94a2b923b/",
      },
    ],
  },
  Footer: {
    text: "Design By Vaibhav D © Copy Right 2024",
  },
};

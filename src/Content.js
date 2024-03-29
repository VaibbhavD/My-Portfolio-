// import images
import Hero_person from "./assets/images/Hero/person.png";

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

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/blogger.png";
import project2 from "./assets/images/projects/mail-box.png";
import project3 from "./assets/images/projects/ecommerce.png";
import project4 from "./assets/images/projects/expense-tracker.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
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
    image: Hero_person,
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
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // image: person_project,
    project_content: [
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
        title: "Ecommerec Website",
        image: project3,
        description: "Ecommerce shopping website",
        link: "https://ecommerce-website-mu-henna.vercel.app/",
        git: "https://github.com/VaibbhavD/Ecommerce-Website",
      },
      {
        title: "Expense Tracker",
        image: project4,
        description: "Build Shopping Ecommerce website",
        git: "https://github.com/VaibbhavD/Expense-Tracker-ReactJs-Redux",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "About Me",
    subtitle: "Web Developer",
    image1: Hireme_person,
    // image2: Hireme_person2,
    para: "Hello! I'm Vaibhav Dhamanage, a passionate and dedicated fresher front-end developer with a strong foundation in HTML, CSS, JavaScript, React, and Redux. I am enthusiastic about creating intuitive and visually appealing user interfaces that enhance the overall user experience.I am excited about the opportunity to embark on this journey as a front-end developer and am eager to leverage my skills and enthusiasm to make a meaningful impact. Let's collaborate and build something great together!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "vaibhavdhamanage13@gmail.com",
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

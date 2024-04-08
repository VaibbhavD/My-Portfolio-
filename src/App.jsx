// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";

import Projects from "./components/Projects";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <footer className=" text-center">
        <h6 className="mb-3 bg-dark_primary">Vaibhav D</h6>
        <p>Vaibhav Dhamanage @2024</p>
      </footer>
    </div>
  );
};

export default App;

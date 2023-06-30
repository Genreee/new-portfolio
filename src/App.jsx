import "./App.css";
import Header from "./components/header";
import Introduction from "./components/introduction";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BackToTopButton from "./components/backtotop";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;

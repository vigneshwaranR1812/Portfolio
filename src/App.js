import "./App.css";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
function App() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] m-auto">
        <Intro />
      </div>
      <About />
      <Certificate />
      <Project />
      <Contact />
    </>
  );
}

export default App;

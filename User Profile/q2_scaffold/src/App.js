import "./styles.css";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";

export default function App() {
  // Code here
  return (
    <>
     <div className="app-container">
        <Hero />
        <Skills />
        <About />
     </div>
    </>
  )
}

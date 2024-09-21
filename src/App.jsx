import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import "./index.css";
import Projects from "./components/Projects.jsx";
import ContactUs from "./components/ConnectMe.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <div className="bg-[#090B0F] w-full min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactUs />
      </div>
    </>
  );
}
/*
:root {
  --AzureRadiance: #0095f6;
  --black: #000;
  l
  --rose: #FF0069;
  --purplePizzazz: #D300C5;
  --electricVoilet: #7638FA;
  --flushOrange: #FF7A00;
  --gold: #FFD600;
  --white: #FFFFFF;
  --dimGrey: #F6F6F6;
  --paddingX: 0.4rem;
  --grey: #8B8C96;
  --darkGrey: #626262;
  --fontFamily: "Ubuntu";
  --blackishBlue: #090B0F;
  --dimLight: #EBF6FF;
  --shadowBlack: #3E4047;
}

*/
export default App;

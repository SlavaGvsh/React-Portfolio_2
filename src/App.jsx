import {
  Header,
  Footer,
  Home,
  About,
  SkillsInfo,
  Services,
  Portfolio,
  GetInTouch,
  OurClients,
  ContactSection,
} from "./components/index.js";
// import { mainImg } from "./assets/images/index.js";
// import "./index.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <GetInTouch />
        <OurClients />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;

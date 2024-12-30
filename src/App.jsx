import {
  Header,
  Footer,
  Home,
  About,
  SkillsInfo,
  Services,
  Portfolio,
  GetInTouch,
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
      </main>
      <Footer />
    </>
  );
}

export default App;

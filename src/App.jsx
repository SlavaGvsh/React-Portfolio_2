import { Header, Footer, Home, About } from "./components/index.js";
// import { mainImg } from "./assets/images/index.js";
// import "./index.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        {/* <div className="container">
          <h1>Vite + React</h1>
          <img src={mainImg} alt="" />
        </div> */}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

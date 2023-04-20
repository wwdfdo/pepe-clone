import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Tokenomics from "./components/Tokenomics/Tokenomics.";

function App() {
  return (
    <div className="bg-[#4f9843]">
      <Header />
      <Banner />
      <About />
      <HowToBuy />
      <Tokenomics />
    </div>
  );
}

export default App;

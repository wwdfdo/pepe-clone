import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HowToBuy from "./components/HowToBuy/HowToBuy";

function App() {
  return (
    <div className="bg-[#4f9843]">
      <Header />
      <Banner />
      <About />
      <HowToBuy />
    </div>
  );
}

export default App;

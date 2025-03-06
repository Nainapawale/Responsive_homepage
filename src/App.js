import React from "react";
import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

const App = () => {
  let heroData = [
    { text1: "What is right? ", text2: "What you want?" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Drive on", text2: "your goals" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  // const [playStatus,setPlayStatus]=useState(false);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <Footer />
    </div>
  );
};
export default App;

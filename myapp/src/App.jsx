import React, { useEffect } from "react";
import AOS from "aos";

// Component import
import Navbar from "./components/shared/Navbar";
import Hero from "../src/pages/shared/Home";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
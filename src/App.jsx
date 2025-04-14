import React from "react";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import MainContent from "./components/MainContent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can change this to wait for real data or assets

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <MainContent />}
    </>
  );
}

export default App;

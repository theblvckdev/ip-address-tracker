import React from "react";
import Banner from "./components/banner";
import Map from "./components/map";

const App = () => {
  return (
    <>
      <div className="app font-rubik overflow-hidden">
        <Banner />
        <Map />
      </div>
    </>
  );
};

export default App;

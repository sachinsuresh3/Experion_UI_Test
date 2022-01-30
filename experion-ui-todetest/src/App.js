import React from "react";
import Header from "./components/header/Header";
import Main from "./components/layout/Layout";
import SideMenu from "./components/sideMenu/SideMenu";


const App = () => {
  return (
    <div className="container">
      <div className="main-wrap">
        <SideMenu />
        <div className="main-inner-wrap">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;

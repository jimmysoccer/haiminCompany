import "./App.css";
import About from "./pages/About";
import Home from "./pages/home/Home";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "./constants/navBar";
import { useState } from "react";
import Product from "./pages/Product";
import { computerScreenIcon, intranetIcon } from "./imgs/image";
import { Grid } from "@mui/material";
import { FunctionalityContainer } from "./pages/home/components/functionality_container";
import { IntroductionContainer } from "./pages/home/components/introduction_container";

function App() {
  const [currentNavBar, setCurrentNavBar] = useState(HOME_PAGE);
  function NavBar() {
    return (
      <ul>
        <li
          style={{ width: "20%" }}
          onClick={() => {
            setCurrentNavBar(HOME_PAGE);
          }}
        >
          Image Logo
        </li>
        <li
          className={currentNavBar === HOME_PAGE ? "active" : ""}
          onClick={(e) => {
            setCurrentNavBar(HOME_PAGE);
          }}
        >
          主页
        </li>
        <li
          className={currentNavBar === PRODUCT_PAGE ? "active" : ""}
          onClick={(e) => {
            setCurrentNavBar(PRODUCT_PAGE);
          }}
        >
          产品
        </li>
        <li
          className={currentNavBar === ABOUT_PAGE ? "active" : ""}
          onClick={(e) => {
            setCurrentNavBar(ABOUT_PAGE);
          }}
        >
          联系我们
        </li>
      </ul>
    );
  }

  return (
    <div>
      <IntroductionContainer />
      <FunctionalityContainer />
    </div>
  );
}

export default App;

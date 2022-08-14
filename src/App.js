import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "./constants/navBar";
import { useState } from "react";
import Product from "./pages/Product";

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
    <>
      <header className="sticky">
        <NavBar></NavBar>
      </header>
      <body>
        {currentNavBar === HOME_PAGE ? (
          <Home />
        ) : currentNavBar === ABOUT_PAGE ? (
          <About />
        ) : currentNavBar === PRODUCT_PAGE ? (
          <Product />
        ) : (
          <view>404 ERROR</view>
        )}
      </body>
    </>
  );
}

export default App;

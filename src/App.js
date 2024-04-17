import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE } from "./constants/navBar";
import { useState } from "react";
import Product from "./pages/Product";
import { computerScreenIcon, intranetIcon } from "./imgs/image";

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
      <div className="bg-primary-subtle">
        <div className="container text-center">
          <h3 className="fs-6 pt-5">A single source of truth</h3>
          <h1 className="fs-2 fw-bold pt-2 pb-5">
            Document conversations and make them searchable
          </h1>
          <div className="d-flex justify-content-start p-2">
            <div className="container">
              <img
                src={computerScreenIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
            <div className="container">
              <h3 className="fs-4 fw-bold ">List 1</h3>
              <p>list 1 balabalabalabalabalabalabalabala</p>
              <p>list 2</p>
              <p>list 3</p>
              <p>list 4</p>
              <p>list 5</p>
            </div>
          </div>
          <div className="d-flex justify-content-start p-2">
            <div className="container">
              <p>list 1</p>
              <p>list 2</p>
              <p>list 3</p>
              <p>list 4</p>
              <p>list 5</p>
            </div>
            <div className="container">
              <img
                src={intranetIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

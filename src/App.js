import "./App.css";
import Home from "./components/pages/home/Home";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import { NAV_MENU } from "./constants/navBar";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import AddProject from "./components/common/AddProject";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/layout/NavBar";
import { NotFound } from "./components/common/NotFound";
import Account from "./components/common/Account";
import { Footer } from "./components/layout/Footer";

function App() {
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <div>
      <NavBar></NavBar>
      {/* <CustomCarousel
        images={[
          display1Icon,
          display2Icon,
          display3Icon,
          display4Icon,
          softwareDevelopmentIcon,
          dbInstallationIcon,
        ]}
        height={500}
      ></CustomCarousel> */}

      <Routes>
        <Route path={"/"} element={<Navigate to="/home" />}></Route>
        <Route path={NAV_MENU[0].path} element={<Home />}></Route>
        <Route
          path={"/haiminCompany"}
          element={<Navigate to="/home" />}
        ></Route>
        <Route path={NAV_MENU[1].path} element={<About />}></Route>
        <Route path={NAV_MENU[2].path} element={<Projects />}></Route>
        <Route path={NAV_MENU[2].path + "/:id"} element={<Project />}></Route>
        <Route path={NAV_MENU[3].path} element={<Contact />}></Route>
        <Route path="login" element={<Account />}></Route>
        <Route path="add_project" element={<AddProject />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

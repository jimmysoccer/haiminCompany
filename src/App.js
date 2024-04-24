import "./App.css";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import {
  companyIcon,
  computerScreenIcon,
  intranetIcon,
  logoIcon,
  workingIcon,
} from "./imgs/image";
import { NAV_MENU } from "./constants/navBar";
import { Drawer, Paper, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact";
import Carousel from "react-material-ui-carousel";
import { FooterContainer } from "./pages/home/components/footer_container";
import Project from "./pages/projects/Project";

function App() {
  const location = useLocation();
  const pathName = location.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobileMatch = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const NavBar = () => {
    return (
      <>
        {isMobileMatch ? (
          <div>
            <div
              className="container d-flex justify-content-between"
              style={{ height: "100px" }}
            >
              <div className="h-100 mx-5">
                <img
                  src={logoIcon}
                  alt="logo"
                  className="img-fluid w-100 h-100"
                ></img>
              </div>
              <div className="h-100">
                <MenuIcon
                  className="w-50 h-100"
                  onClick={() => toggleDrawer(true)}
                ></MenuIcon>
              </div>
            </div>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <div className="text-center my-5" style={{ width: "50vw" }}>
                {NAV_MENU.map((nav) => (
                  <Link
                    to={nav.path}
                    onClick={() => {
                      setDrawerOpen(false);
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      className={
                        pathName.includes(nav.path)
                          ? "nav-text-mobile clicked"
                          : "nav-text-mobile"
                      }
                    >
                      {nav.name}
                    </p>
                  </Link>
                ))}
              </div>
            </Drawer>
          </div>
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ height: "100px" }}
          >
            <div className="h-100 mx-5">
              <img
                src={logoIcon}
                alt="logo"
                className="img-fluid w-100 h-100"
              ></img>
            </div>
            <div className="nav-menu">
              {NAV_MENU.map((nav) => (
                <Link to={nav.path} className="position-relative">
                  <div
                    className={
                      pathName.includes(nav.path)
                        ? "nav-text clicked px-5"
                        : "nav-text px-5"
                    }
                    style={{ lineHeight: "100px" }}
                  >
                    {nav.name}
                  </div>
                  {pathName.includes(nav.path) && (
                    <div className="nav-text-bottom-border"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  function HomeCarousel(props) {
    var items = [
      {
        image: companyIcon,
      },
      {
        image: workingIcon,
      },
      { image: computerScreenIcon },
      { image: intranetIcon },
    ];

    return (
      <Carousel navButtonsAlwaysVisible>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }
  function Item(props) {
    const imageUrl = props?.item?.image ?? logoIcon;
    return (
      <Paper
        className="d-flex justify-content-center shadow-none"
        style={{ height: "400px" }}
      >
        <img
          src={imageUrl}
          alt="projects_carousel"
          className="img-fluid h-100"
        ></img>
      </Paper>
    );
  }

  return (
    <div>
      <NavBar />
      <HomeCarousel />

      <Routes>
        <Route path={NAV_MENU[0].path} element={<Home />}></Route>
        <Route path={"/haiminCompany"} element={<Home />}></Route>
        <Route path={NAV_MENU[1].path} element={<About />}></Route>
        <Route path={NAV_MENU[2].path} element={<Projects />}></Route>
        <Route path={NAV_MENU[2].path + "/:id"} element={<Project />}></Route>
        <Route path={NAV_MENU[3].path} element={<Contact />}></Route>
      </Routes>

      <FooterContainer />
    </div>
  );
}

export default App;

import { Avatar, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logoTextIcon } from "../../assets/images/image";
import { useState } from "react";
import { NAV_MENU } from "../../constants/navBar";
import { Link, useLocation } from "react-router-dom";
import { useAtomValue } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { VISITOR } from "../../constants/constant";
import { deepOrange } from "@mui/material/colors";

export default function NavBar() {
  const isMobileMatch = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const pathName = location.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const accessRole = useAtomValue(accessRoleAtom);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
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
                src={logoTextIcon}
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
              <div className="d-flex justify-content-center">
                <Link className="text-decoration-none" to={"login"}>
                  {accessRole === VISITOR ? (
                    <Avatar>H</Avatar>
                  ) : (
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>H</Avatar>
                  )}
                </Link>
              </div>
            </div>
          </Drawer>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ height: "100px" }}
        >
          <div style={{ width: "10%" }}></div>
          <div
            style={{ width: "80%" }}
            className="d-flex justify-content-center"
          >
            <div className="h-100 mx-5 d-flex align-items-center">
              <img
                src={logoTextIcon}
                alt="logo"
                className="img-fluid w-100 h-75"
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
          <div
            style={{ width: "10%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Link className="text-decoration-none" to={"login"}>
              {accessRole === VISITOR ? (
                <Avatar>H</Avatar>
              ) : (
                <Avatar sx={{ bgcolor: deepOrange[500] }}>H</Avatar>
              )}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

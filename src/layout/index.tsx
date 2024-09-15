import React from "react";
import { Outlet } from "react-router-dom";
import NavHero from "./header";

export function Layout() {
  return (
    <React.Fragment>
      <NavHero />
      <Outlet />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

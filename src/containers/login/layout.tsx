import React from "react";
import { Outlet } from "react-router-dom";
import { MXS } from "@jambonz/ui-kit";

import { Icons } from "src/components";

import "./styles.scss";

export const Layout = () => (
  <main className="login bg--dark">
    <header>
      <img
        src="/svg/jambonz--light.svg"
        width="230px"
        height="42"
        alt="jambonz"
      />
    </header>
    <section>
      <Outlet />
    </section>
    <footer>
      All right reserved @ KEOS LLC
    </footer>
  </main>
);

export default Layout;

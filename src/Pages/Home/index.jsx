import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../Components/Molecule/TopBar";
import CursorDot from "../../Components/Atom/BallCursor";

export default function HomePage() {
  return (
    <body style={{ background: "#1f2125", height: "100vh", color: "#DFDFD6" }}>
      <CursorDot />
      <TopBar />
      <Outlet />
    </body>
  );
}

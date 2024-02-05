import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader"

function RootLayout() {
  return (
    <>
      <MainHeader />
      {/* Placeholder for the children layout, defined in main.jsx */}
      <Outlet />
    </>
  );
}

export default RootLayout
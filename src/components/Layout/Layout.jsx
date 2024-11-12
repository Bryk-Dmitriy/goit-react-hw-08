import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import HeaderInfo from "./HeaderInfo";
import Footer from "./Footer";


function Layout() {
  return (
    <>
      <HeaderInfo />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

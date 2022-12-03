
import { Outlet } from "react-router-dom";
import Navigation from "../../routers/Navigation/Navigation";


export default function Layout({children}) {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

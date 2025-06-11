import { Outlet } from "react-router";
import { Header } from "../Components/Header";

export function AppLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
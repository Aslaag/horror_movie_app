import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="relative">
      <Header/>
      <Outlet/>
    </div>
  )
}
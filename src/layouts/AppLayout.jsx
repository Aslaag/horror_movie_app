import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function AppLayout(props) {
  return (
    <div className="relative">
      <Header onSubmitSearch={props.onSubmitSearch}/>
      <Outlet/>
    </div>
  )
}
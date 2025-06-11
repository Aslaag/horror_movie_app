import { Logo } from "./Logo"
import { NavBar } from "./NavBar"

export function Header() {
  return <><div className=" absolute w-full flex py-2 px-4 justify-between bg-gradient-to-t from-transparent to-red-950">
    <Logo/>
    <NavBar/>
  </div></>
}
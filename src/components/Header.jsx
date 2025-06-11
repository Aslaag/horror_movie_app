import { Logo } from "./Logo"
import { NavBar } from "./NavBar"

export function Header() {
  return <><div className="flex py-2 px-4 justify-between bg-gray-700">
    <Logo/>
    <NavBar/>
  </div></>
}
import { Button } from "./Button"
import { SearchBar } from "./SearchBar"

export function NavBar() {
  return <>
    <div className="flex items-center gap-5
    ">
      <SearchBar/>
      <Button buttonName="Sign In"/>
      <Button buttonName="Register"/>
      <Button buttonName="Color Mode" theme="colorMode"/>
    </div>
  </>
}
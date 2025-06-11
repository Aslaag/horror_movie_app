import { Search } from "lucide-react";

export function SearchBar() {
  return <>
    <Search color="white"/>
    <input type="text" placeholder="Search a movie you may like" className="bg-white/20 py-1 px-3 rounded-xl w-fit text-white placeholder:text-sm placeholder:text-white/50 hover:bg-white/30 transition-all transition-300"></input>
  </>
}
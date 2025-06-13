import { Search } from "lucide-react";
import { useState } from "react";
import { fetchSearch } from "../utils/horror-utils";

export function SearchBar() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const changeInputValue = (e) => {
    setSearchInputValue(e.target.value)
  }

  return <>
    <button 
      className=" hover:cursor-pointer" 
      onClick={() => fetchSearch(searchInputValue)}
    >
      <Search color="white"/>
    </button>
    <input 
      onChange={changeInputValue} 
      type="text" 
      placeholder="Search a movie you may like" 
      className="bg-white/20 py-1 px-3 rounded-xl w-fit text-white placeholder:text-sm placeholder:text-white/50 hover:bg-white/30 transition-all transition-300">
    </input>
  </>
}
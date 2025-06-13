
export function FilterBar(props) {

  return <>
    <input 
      type="text" 
      placeholder="Filter movies..." 
      value={props.filter}
      onChange={(e) => props.onFilterChange(e.target.value)}
      className="bg-black/60 border-1 py-1 px-3 rounded-xl w-fit text-white placeholder:text-sm placeholder:text-white/50 hover:bg-black/40 transition-all transition-300" />
  </>
}
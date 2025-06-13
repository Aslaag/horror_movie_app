import { useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { MovieCardContainer } from "./MovieCardContainer";

export function RecoContainer(props) {
  const [movieFilter, setMovieFilter] = useState("");

  const filteredReco = movieFilter 
  ? props.reco.filter(movie =>movie.original_title.toLowerCase().includes(movieFilter.toLowerCase()))
  : props.reco;

  return <>
    <div className="flex flex-col pt-2 pl-2 gap-2 bg-gradient-to-b from-transparent to-red-950">
      <div className="flex justify-between items-center pr-2 text-white">
        <h2>You may also like :</h2>
        <FilterBar filter={movieFilter} onFilterChange={setMovieFilter}/>
      </div>
      <MovieCardContainer reco={filteredReco}/>
    </div>
  </>
}
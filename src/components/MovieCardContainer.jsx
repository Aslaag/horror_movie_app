import { MovieCard } from "./MovieCard";

export function MovieCardContainer() {
  return <div className="flex gap-5 overflow-x-scroll">
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    <MovieCard/>
    
  </div>
}
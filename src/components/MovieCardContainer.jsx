import { MovieCard } from "./MovieCard";

export function MovieCardContainer(props) {
  return <div className="flex gap-5 overflow-x-scroll">
      {props.reco.map((movie) => (
        <MovieCard 
          key={movie.id} 
          title={movie.original_title} 
          img={movie.backdrop_path}
          id={movie.id}/>
        )
      )}
    
  </div>
}
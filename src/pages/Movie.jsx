import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchDetailsMovie } from "../utils/horror-utils";

export function Movie() {
  const detailsMovieId = useParams();
  console.log(detailsMovieId);
  const [detailsMovie, setDetailsMovie] = useState(null);

  async function loadDetailsMovie() {
    const detailsMovieData = await fetchDetailsMovie(detailsMovieId);
    if (detailsMovieData && detailsMovieData.length > 0) {
      setDetailsMovie(detailsMovieData[0]);
    }
  }

  useEffect(() => {
      loadDetailsMovie();
    }, []);
    
  return <>
    <h2 className="uppercase">This is the detailed view ! {detailsMovie.original_title}</h2>
  </>
}
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/Button";
import { MovieInfo } from "../components/MovieInfo";
import { CONFIG } from "../constants/horror-constants";
import { ROUTES } from "../routes/Routes";
import { fetchDetailsMovie } from "../utils/horror-utils";

export function Movie() {
  let navigate = useNavigate();
  const detailsMovieId = useParams();
  const [detailsMovie, setDetailsMovie] = useState("");

  async function loadDetailsMovie() {
    const detailsMovieData = await fetchDetailsMovie(detailsMovieId.id);
      setDetailsMovie(detailsMovieData);
  }

  useEffect(() => {
      loadDetailsMovie();
    }, []);

     const backgroundStyle = detailsMovie
            ? {
                backgroundImage: `url(${CONFIG.IMG_BIG}${detailsMovie.backdrop_path})`,
    
            }
            : {};
    
  return <>
    <section style={backgroundStyle} className="bg-cover bg-center h-screen flex flex-col">
      <div className="">
        <Button 
        onClick={() => {navigate(ROUTES.HOME)}} 
        buttonName="Back to menu"><ArrowLeft/></Button></div>
        <div className="flex flex-col gap-10 p-2 pt-20">
          {detailsMovie && (
              <MovieInfo movieInfo={detailsMovie}/>
            )}
        </div>
      </section>
  </>
}
import { useEffect, useState } from "react"
import { MoreInfo } from "../components/MoreInfo"
import { MovieInfo } from "../components/MovieInfo"
import { RecoContainer } from "../components/RecoContainer"
import { CONFIG } from "../constants/horror-constants"
import { loadPopularMovie, loadRecommendations } from "../utils/horror-utils"

export function HomePage() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    loadPopularMovie();
    loadRecommendations();
  }, []);

  useEffect(() => {
    setCurrentMovie
    console.log(currentMovie)
  }, [])

  const backgroundStyle = currentMovie
        ? {
            backgroundImage: `url(${CONFIG.IMG_BIG}${currentMovie.backdrop_path})`,

        }
        : {};

  return <>
  <section style={backgroundStyle} className="bg-cover bg-center h-screen flex flex-col justify-between">
    <div className="flex flex-col gap-10 p-2 pt-52">
      {currentMovie && (
          <MovieInfo movieInfo={currentMovie}/>
        )}
      {currentMovie && (
          <MoreInfo movieId={currentMovie.id}/>
        )}
    </div>
    <div className=" ">
          <RecoContainer recoInfo={recommendations}/>
    </div>
  </section>
  </>
}
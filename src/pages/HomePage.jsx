import { useEffect, useState } from "react"
import { MoreInfo } from "../components/MoreInfo"
import { MovieInfo } from "../components/MovieInfo"
import { RecoContainer } from "../components/RecoContainer"
import { CONFIG } from "../constants/horror-constants"
import { fetchPopularMovie, fetchRecommendations } from "../utils/horror-utils"

export function HomePage() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  // setCurrentMovie(horrorMovieData[0]) remplis mon useState()
  // setRecommendations(recoHorrorData) remplis mon useState()

  async function loadPopular() {
    const horrorMovieData = await fetchPopularMovie();
    if (horrorMovieData && horrorMovieData.length > 0) {
      setCurrentMovie(horrorMovieData[0]);
    }
  }

  async function loadRecommendations() {
    const recoHorrorData = await fetchRecommendations(currentMovie.id);
    if (recoHorrorData && recoHorrorData.length > 0) {
      setRecommendations(recoHorrorData);
    }
  }
  useEffect(() => {
    loadPopular();
  }, []);

  useEffect(() => {
    if (currentMovie) {
    loadRecommendations();
    }
  }, [currentMovie]);

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
      {recommendations && (
          <RecoContainer reco={recommendations}/>
        )}
    </div>
  </section>
  </>
}
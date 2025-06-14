import { useEffect, useState } from "react"
import { MoreInfo } from "../components/MoreInfo"
import { MovieInfo } from "../components/MovieInfo"
import { RecoContainer } from "../components/RecoContainer"
import { CONFIG } from "../constants/horror-constants"
import { fetchPopularMovie, fetchRecommendations, fetchSearch } from "../utils/horror-utils"

export function HomePage(props) {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  console.log("props : ", props)

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

  async function loadSearch() {
    const searchHorrorData = await fetchSearch(props.queryValue);
    if (searchHorrorData && searchHorrorData.length > 0) {
      setSearchResults(searchHorrorData[0]);
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

  useEffect(() => {
    if (props.queryValue) {
      loadSearch();
    }
  }, [props.queryValue]);

    useEffect(() => {
    if (searchResults) {
    setCurrentMovie(searchResults);
    }
  }, [searchResults]);

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
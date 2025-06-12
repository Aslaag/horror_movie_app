import { CONFIG } from "../constants/horror-constants";

  export async function loadPopularMovie() {
    try {
     const response = await fetch(`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`) // VA chercher l'url
     const movieData = await response.json() //Transforme en .json
     const horrorMovieData =  movieData.results.filter((movie) => movie.genre_ids.includes(27));
     setCurrentMovie(horrorMovieData[0]) // remplis mon useState()
     console.log(horrorMovieData)
    return horrorMovieData // retourne le résultat
    }
    catch{(error) => {
      console.error("Fetch error :", error);
    }};
  }

   export async function loadRecommendations() {
      try {
       const response = await fetch(`${CONFIG.BASE_URL}/movie/${currentMovie.id}/recommendations?api_key=${CONFIG.API_KEY}`) // VA chercher l'url
       const recoMovieData = await response.json() //Transforme en .json
       const recoHorrorData =  recoMovieData.results.filter((movie) => movie.genre_ids.includes(27));
       setRecommendations(recoHorrorData) // remplis mon useState()
       console.log(recoHorrorData)
      return recoHorrorData // retourne le résultat
      }
      catch{(error) => {
        console.error("Fetch error :", error);
      }};
    }
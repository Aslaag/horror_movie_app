import { CONFIG } from "../constants/horror-constants";

  export async function fetchPopularMovie() {
    try {
     const response = await fetch(`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`) // VA chercher l'url
     const movieData = await response.json() //Transforme en .json
     const horrorMovieData =  movieData.results.filter((movie) => movie.genre_ids.includes(27));
     console.log(horrorMovieData)
    return horrorMovieData // retourne le résultat
    }
    catch{(error) => {
      console.error("Fetch error :", error);
    }};
  }

   export async function fetchRecommendations(currentId) {
      try {
       const response = await fetch(`${CONFIG.BASE_URL}/movie/${currentId}/recommendations?api_key=${CONFIG.API_KEY}`) // VA chercher l'url
       const recoMovieData = await response.json() //Transforme en .json
       const recoHorrorData =  recoMovieData.results.filter((movie) => movie.genre_ids.includes(27));
       console.log(recoHorrorData)
      return recoHorrorData // retourne le résultat
      }
      catch{(error) => {
        console.error("Fetch error :", error);
      }};
    }

    export async function fetchSearch(movieTitle) {
      try {
       const response = await fetch(`${CONFIG.BASE_URL}/search/movie?api_key=${CONFIG.API_KEY}&query=${movieTitle}`) // VA chercher l'url
       const searchMovieData = await response.json() //Transforme en .json
       const searchHorrorData =  searchMovieData.results.filter((movie) => 
        movie.genre_ids.includes(27)
        && movie.backdrop_path
        && (movie.original_title.toLowerCase().includes(movieTitle.toLowerCase())
        || movie.title.toLowerCase().includes(movieTitle.toLowerCase())));
       console.log("fonctions data :", searchHorrorData)
      return searchHorrorData // retourne le résultat
      }
      catch{(error) => {
        console.error("Fetch error :", error);
      }};
    }

    export async function fetchDetailsMovie(movieId) {
      try {
       const response = await fetch(`${CONFIG.BASE_URL}/movie/${movieId}?api_key=${CONFIG.API_KEY}&append_to_response=credits`) // VA chercher l'url
       const detailsHorrorData = await response.json() //Transforme en .json
      return detailsHorrorData // retourne le résultat
      }
      catch{(error) => {
        console.error("Fetch error :", error);
      }};
    }
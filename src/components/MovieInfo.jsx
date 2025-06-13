
export function MovieInfo(props) {
  return <>
    <div className=" text-white">
      <h2 className="uppercase">{props.movieInfo.original_title}</h2>
      <p>{props.movieInfo.vote_average} / 10</p>
      <p>{props.movieInfo.overview}</p>
    </div>
  </>
}
import { useNavigate } from "react-router";
import { ROUTES } from "../routes/Routes";

export function MoreInfo(props) {
  let navigate = useNavigate();

  return <div>
  <button onClick={() => {
            navigate(ROUTES.MOVIE.replace(":id", props.movieId));
          }} className="text-gray-400">More info !</button>
          </div>
}
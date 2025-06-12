import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { CONFIG } from "../constants/horror-constants";
import { ROUTES } from "../routes/Routes";
import { Button } from "./Button";

export function MovieCard(props) {
  let navigate = useNavigate();
  
  return <div>
    <div className="relative w-[300px]">
      <img src={`${CONFIG.IMG_SMALL}${props.img}`} alt="Movie Preview" className="rounded-sm"/>
      <p className="flex items-center bg-red-950/70 rounded-b-sm text-white absolute bottom-0 w-full pl-3 justify-between">{props.title} <Button className="absolute top-0" onClick={() => {
          navigate(ROUTES.MOVIE.replace(":id", props.id));
        }}><ArrowRight/></Button></p>
    </div>
   
  </div>
}
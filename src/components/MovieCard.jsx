import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { CONFIG } from "../constants/horror-constants";
import { ROUTES } from "../routes/Routes";
import { Button } from "./Button";

export function MovieCard() {
  let navigate = useNavigate();
  return <div>
    <div className="relative w-[300px]">
      <img src={`${CONFIG.IMG_SMALL}${CONFIG.SINNERS_LARGE}`} alt="Movie Preview"/>
      <p className="flex items-center bg-gray-800 text-white absolute bottom-0 w-full pl-3 justify-between">MovieTitle <Button className="absolute top-0" onClick={() => {
          navigate(ROUTES.MOVIE);
        }}><ArrowRight/></Button></p>
    </div>
   
  </div>
}
import { FilterBar } from "../components/FilterBar"
import { MovieCardContainer } from "./MovieCardContainer"

export function RecoContainer(props) {
  return <>
    <div className="flex flex-col p-2 gap-5 bg-gray-200/50">
      <div className="flex justify-between text-white">
        <h2>You may also like :</h2>
        <FilterBar/>
      </div>
      <MovieCardContainer reco={props.reco}/>
    </div>
  </>
}
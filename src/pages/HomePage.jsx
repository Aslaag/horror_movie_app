import { MoreInfo } from "../components/MoreInfo"
import { MovieInfo } from "../components/MovieInfo"
import { RecoContainer } from "../components/RecoContainer"
import { CONFIG } from "../constants/horror-constants"

export function HomePage() {
  return <>
  <section style={{ backgroundImage: `url(${CONFIG.IMG_BIG}${CONFIG.SINNERS_LARGE})` }} className="bg-cover bg-center h-screen flex flex-col justify-between">
    <div className="flex flex-col gap-10 p-2 pt-52">
      <MovieInfo/>
      <MoreInfo/>
    </div>
    <div className=" ">
      <RecoContainer/>
    </div>
  </section>
  </>
}
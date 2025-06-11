import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Movie } from "./pages/Movie";
import { NotFound } from "./pages/NotFound";
import { ROUTES } from "./routes/Routes";


export function App() {
  return <>
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME}  element={<HomePage/>}/>
          <Route path={ROUTES.MOVIE}   element={<Movie/>}/>
          <Route path={ROUTES.NOT_FOUND}   element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
</>
}
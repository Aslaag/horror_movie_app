import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Movie } from "./pages/Movie";
import { NotFound } from "./pages/NotFound";


export function App() {
  return <>
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/movie"  element={<Movie/>}/>
          <Route path="/*"  element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
</>
}
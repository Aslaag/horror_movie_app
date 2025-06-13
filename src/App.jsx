import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "./pages/HomePage";
import { Movie } from "./pages/Movie";
import { NotFound } from "./pages/NotFound";
import { ROUTES } from "./routes/Routes";


export function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return <>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppLayout onSubmitSearch={setSearchQuery}/>}>
          <Route path={ROUTES.HOME}  element={<HomePage queryValue={searchQuery}/>}/>
        </Route>
        <Route path={ROUTES.MOVIE}   element={<Movie/>}/>
        <Route path={ROUTES.NOT_FOUND}   element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
</>
}
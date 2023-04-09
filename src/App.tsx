import Navbar from "./comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./comps/login/Login";
import SearchPage from "./comps/searchbar/SearchPage";
import SearchedRecipes from "./comps/cardWrapper/SearchedRecipes";
import Favorites from "./comps/favorites/Favorites";
import Main from "./comps/main/Main";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { users } from "./db/users";
import { UserInterface } from "./models/UserInterface";

function App() {
  const [token, setToken] = useState("azhar");
  // const favs: string[] = getFavs(token, users);

  return (
    <>
      <UserContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<Favorites favorites={[]} />} />
            <Route path="/search/search/:input" element={<SearchedRecipes />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
export default App;

function getFavs(token: string, users: UserInterface[]) {
  const ok: string[] = [];
  for (const user of users) {
    if (user.email === token) {
      return user.listRecipes;
    }
    return ok;
  }
}

import Navbar from "./comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "./comps/content/ContentWrapper";
import Login from "./comps/login/Login";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  //токен просто хранить в себе email при входе с логин
  //по имейлу можно будет добавлять рецепты в фавориты
  const [token, setToken] = useState<string>("azharkazhikarimova@gmail.com");
  
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ token, setToken }}>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/categories/:category" element={<ContentWrapper />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

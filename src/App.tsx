import Navbar from "./comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "./comps/content/ContentWrapper";
import Login from "./comps/login/Login";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <>
      <UserContext.Provider value={{ login, setLogin }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/categories/:category" element={<ContentWrapper />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

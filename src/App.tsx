import Navbar from "./comps/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentWrapper from "./comps/content/ContentWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/categories/:category" element={<ContentWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

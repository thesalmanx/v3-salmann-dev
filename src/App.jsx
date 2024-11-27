import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Layout from "./components/Layout.jsx";
import DetailAbout from "./pages/DetailAbout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<DetailAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

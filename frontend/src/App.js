import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SectionPage from "@/pages/SectionPage";
import { SECTIONS } from "@/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home locale="it" />} />
          <Route path="/it" element={<Home locale="it" />} />
          <Route path="/en" element={<Home locale="en" />} />
          {Object.entries(SECTIONS).flatMap(([key, slugs]) => [
            <Route
              key={`${key}-it`}
              path={`/it/${slugs.it}`}
              element={<SectionPage locale="it" section={key} />}
            />,
            <Route
              key={`${key}-en`}
              path={`/en/${slugs.en}`}
              element={<SectionPage locale="en" section={key} />}
            />,
          ])}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

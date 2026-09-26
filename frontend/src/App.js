import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SectionPage from "@/pages/SectionPage";
import ProjectPage from "@/pages/ProjectPage";
import { PROJECTS, SECTIONS } from "@/routes";

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
          {Object.keys(PROJECTS).flatMap((key) => [
            <Route
              key={`project-${key}-it`}
              path={`/it/${SECTIONS.work.it}/${PROJECTS[key]}`}
              element={<ProjectPage locale="it" project={key} />}
            />,
            <Route
              key={`project-${key}-en`}
              path={`/en/${SECTIONS.work.en}/${PROJECTS[key]}`}
              element={<ProjectPage locale="en" project={key} />}
            />,
          ])}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

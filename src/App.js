import PortfolioApp from "./PortfolioApp/PortfolioApp.js"
import ProjectDetailsPage from "./PageProjects/ProjectDetailsPage/ProjectDetailsPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path={"/portfolio"}  element={<PortfolioApp />} />
      <Route path="/portfolio/project/:projectId" element={<ProjectDetailsPage />} />
    </Routes>
  </Router>

    </div>
  );
}

export default App;

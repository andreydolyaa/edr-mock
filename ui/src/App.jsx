import Dashboard from "./pages/Dashboard/Dashboard";
import Alerts from "./pages/Alerts/Alerts";
import Incidents from "./pages/Incidents/Incidents";
import Endpoints from "./pages/Endpoints/Endpoints";
import Sidebar from "./pages/Sidebar/Sidebar";
import Topbar from "./pages/Topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function App() {
  return (
    <Router>
      <div className="App">
        <Tooltip id="tooltip" />
        <Sidebar />
        <div className="sub-app">
          <Topbar />
          <div className="app-routes">
            <Routes>
              <Route exact path="/" element={<Endpoints />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/alerts" element={<Alerts />} />
              <Route exact path="/incidents" element={<Incidents />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

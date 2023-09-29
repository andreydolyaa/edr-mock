import Dashboard from "./pages/Dashboard/Dashboard";
import EventLogs from "./pages/EventLogs/EventLogs";
import Alerts from "./pages/Alerts/Alerts";
import ThreatIntl from "./pages/ThreatIntl/ThreatIntl";
import Reports from "./pages/Reports/Reports";
import UserActivity from "./pages/UserActivity/UserActivity";
import Settings from "./pages/Settings/Settings";
import NetworkTraffic from "./pages/NetworkTraffic/NetworkTraffic";
import Incidents from "./pages/Incidents/Incidents";
import Sidebar from "./pages/Sidebar/Sidebar";
import Topbar from "./pages/Topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="sub-app">
          <Topbar />
          <div className="app-routes">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/event-logs" element={<EventLogs />} />
              <Route exact path="/alerts" element={<Alerts />} />
              <Route exact path="/incidents" element={<Incidents />} />
              <Route exact path="/threat-intl" element={<ThreatIntl />} />
              <Route exact path="/network-traffic" element={<NetworkTraffic />} />
              <Route exact path="/reports" element={<Reports />} />
              <Route exact path="/users-activity" element={<UserActivity />} />
              <Route exact path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

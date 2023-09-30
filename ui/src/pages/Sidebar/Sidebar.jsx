import Subtitle from "../../components/Subtitle";
import Category from "./_Category";
import Logo from "./_Logo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="categories">
        {/* Dashboard */}
        <Category name={"Dashboard"} icon={"PieChart"} link={"/"} />

        {/* Security */}
        <Subtitle subtitle={"SECURITY"} />
        <Category name={"Event Logs"} icon={"Shield"} link={"event-logs"} />
        <Category name={"Alerts"} icon={"AlertTriangle"} link={"alerts"} />
        <Category name={"Incident Management"} icon={"HardDrive"} link={"incidents"} />
        <Category name={"Threat Intelligence"} icon={"Package"} link={"threat-intl"} />

        {/* Network */}
        <Subtitle subtitle={"NETWORK"} />
        <Category name={"Network Traffic"} icon={"Server"} link={"network-traffic"} />

        {/* Users */}
        <Subtitle subtitle={"USERS"} />
        <Category name={"Reports and Analytics"} icon={"BarChart2"} link={"reports"} />
        <Category name={"User Activity"} icon={"Users"} link={"users-activity"} />

        {/* Settings */}
        <Subtitle subtitle={"CONFIGURATION"} />
        <Category name={"Settings"} icon={"Settings"} link={"settings"} />
      </div>
    </div>
  );
};

export default Sidebar;

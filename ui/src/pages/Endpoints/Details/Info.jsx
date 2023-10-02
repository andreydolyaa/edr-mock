import { formatTimestamp } from "../../../utils/index";

export const Info = ({ endpoint }) => {
  const enabled = (status) => status === "enabled";
  const online = (status) => status === "online";

  return (
    <div className="info col col-lg-8">
      <div className="host-info">
        <div>
          Status:{" "}
          <span style={{ color: online(endpoint.status) ? "#03DC00" : "red" }}>
            {endpoint.status}
          </span>
        </div>
        <div>Host: {endpoint.hostname}</div>
        <div>OS: {endpoint.osVersion}</div>
        <div>Last Seen: {formatTimestamp(endpoint.lastSeen)}</div>
        <div>IP Address: {endpoint.ipAddress}</div>
        <div>DNS Server: {endpoint.dnsServer}</div>
        <div>Default Gateway: {endpoint.gateway}</div>
        <div>Network Type: {endpoint.networkType}</div>
      </div>
      <div className="security-info">
        <div>CPU Usage: %{endpoint.cpuUsage}</div>
        <div>Memory Usage: %{endpoint.memoryUsage}</div>
        <div>Free Disk Space: {endpoint.diskSpaceFree}</div>
        <div>Active Processes: {endpoint.activeProcesses}</div>
        <div>Virus Scan Status: {endpoint.virusScanStatus}</div>
        <div>
          Firewall Status:{" "}
          <span style={{ color: enabled(endpoint.firewallStatus) ? "#03DC00" : "red" }}>
            {endpoint.firewallStatus}
          </span>
        </div>
        <div>
          Antimalware Status:{" "}
          <span style={{ color: enabled(endpoint.firewallStatus) ? "#03DC00" : "red" }}>
            {endpoint.antimalwareStatus}
          </span>
        </div>
        <div>Open Ports: {endpoint.openPorts.map((x) => x + ", ")}</div>
      </div>
    </div>
  );
};

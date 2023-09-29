import NetworkLog from "./_NetworkLog";
import AuthLog from "./_AuthLog";
import IntrusionLog from "./_IntrusionLog";
import AntivirusLog from "./_AntivirusLog";
import WebProxyLog from "./_WebProxyLog";
import FimLog from "./_FimLog";
import VpnLog from "./_VpnLog";
import ActiveDirLog from "./_ActiveDirLog";
import EmailLog from "./_EmailLog";

const Log = ({ log }) => {
  const event = log.eventType;
  const types = {
    NETWORK: "NetworkTraffic",
    AUTH: "Authentication",
    INTRUSION: "IntrusionDetection",
    ANTIVIRUS: "Antivirus",
    WEB_PROXY: "WebProxy",
    FIM: "FIM",
    VPN: "VPN",
    ACTIVE_DIR: "ActiveDirectory",
    EMAIL: "EmailSecurity",
  };
  if (event === types.NETWORK) return <NetworkLog log={log} />;
  else if (event === types.AUTH) return <AuthLog log={log} />;
  else if (event === types.INTRUSION) return <IntrusionLog log={log} />;
  else if (event === types.ANTIVIRUS) return <AntivirusLog log={log} />;
  else if (event === types.WEB_PROXY) return <WebProxyLog log={log} />;
  else if (event === types.FIM) return <FimLog log={log} />;
  else if (event === types.VPN) return <VpnLog log={log} />;
  else if (event === types.ACTIVE_DIR) return <ActiveDirLog log={log} />;
  else if (event === types.EMAIL) return <EmailLog log={log} />;
};

export default Log;

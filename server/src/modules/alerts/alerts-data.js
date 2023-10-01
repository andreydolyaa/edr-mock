export const alertsData = [
  {
    endpoint: "john-workstation01",
    alertType: "High CPU Usage",
    description:
      "CPU usage on john-workstation01 has exceeded 90% for the past 5 minutes.",
    timestamp: "2023-09-30T14:35:00Z",
    severity: "High",
    sourceIP: "192.168.1.100",
    additionalInfo: "Alert triggered by monitoring system",
  },
  {
    endpoint: "server03",
    alertType: "Virus Detected",
    description: "A virus has been detected on server03. Immediate action is required.",
    timestamp: "2023-09-30T16:50:00Z",
    severity: "Critical",
    sourceIP: "Unknown",
    additionalInfo: "Alert triggered during regular antivirus scan",
  },
  {
    endpoint: "jane-laptop02",
    alertType: "Firewall Disabled",
    description: "The firewall on jane-laptop02 has been disabled.",
    timestamp: "2023-09-29T09:20:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "User manually disabled the firewall",
  },
  {
    endpoint: "peter-workstation04",
    alertType: "High Memory Usage",
    description:
      "Memory usage on peter-workstation04 has exceeded 80% for the past 10 minutes.",
    timestamp: "2023-09-30T12:50:00Z",
    severity: "High",
    sourceIP: "192.168.1.101",
    additionalInfo: "Application malfunction caused memory leak",
  },
  {
    endpoint: "sarah-laptop05",
    alertType: "Patch Outdated",
    description: "Patch status on sarah-laptop05 is outdated. Update required.",
    timestamp: "2023-09-30T11:40:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Patch management system identified outdated patches",
  },
  {
    endpoint: "server07",
    alertType: "Network Port Scan Detected",
    description:
      "A network port scan was detected on server07 from IP address 192.168.1.100.",
    timestamp: "2023-09-30T14:55:00Z",
    severity: "Medium",
    sourceIP: "192.168.1.100",
    additionalInfo: "Port scan detected by intrusion detection system",
  },
  {
    endpoint: "john-workstation08",
    alertType: "Disk Space Low",
    description: "Free disk space on john-workstation08 is less than 10GB.",
    timestamp: "2023-09-30T15:55:00Z",
    severity: "Low",
    sourceIP: "Unknown",
    additionalInfo: "Low disk space threshold reached",
  },
  {
    endpoint: "mary-server09",
    alertType: "Security Scan Failed",
    description: "The latest security scan on mary-server09 failed to complete.",
    timestamp: "2023-09-30T19:40:00Z",
    severity: "Low",
    sourceIP: "Unknown",
    additionalInfo: "Scanner encountered an unexpected error",
  },
  {
    endpoint: "michael-workstation10",
    alertType: "Firewall Rule Violation",
    description: "A firewall rule violation was detected on michael-workstation10.",
    timestamp: "2023-09-30T14:40:00Z",
    severity: "Medium",
    sourceIP: "192.168.1.102",
    additionalInfo: "Firewall log analysis detected rule violation",
  },
  {
    endpoint: "susan-laptop11",
    alertType: "Disk Encryption Disabled",
    description: "Disk encryption is disabled on susan-laptop11.",
    timestamp: "2023-09-29T09:25:00Z",
    severity: "Low",
    sourceIP: "Unknown",
    additionalInfo: "User turned off disk encryption",
  },
  {
    endpoint: "david-server12",
    alertType: "High Network Connections",
    description: "The number of network connections on david-server12 has exceeded 100.",
    timestamp: "2023-09-30T17:15:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Network traffic analysis identified excessive connections",
  },
  {
    endpoint: "lisa-workstation13",
    alertType: "Antimalware Disabled",
    description: "Antimalware protection is disabled on lisa-workstation13.",
    timestamp: "2023-09-30T12:50:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "User disabled antimalware software",
  },
  {
    endpoint: "robert-laptop14",
    alertType: "Unauthorized Access Attempt",
    description: "An unauthorized access attempt was detected on robert-laptop14.",
    timestamp: "2023-09-30T17:20:00Z",
    severity: "Medium",
    sourceIP: "192.168.1.103",
    additionalInfo: "Failed login attempts detected",
  },
  {
    endpoint: "emily-desktop15",
    alertType: "Open Port Detected",
    description: "An open port (Port 445) was detected on emily-desktop15.",
    timestamp: "2023-09-29T11:25:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Port scanning activity detected",
  },
  {
    endpoint: "oliver-workstation20",
    alertType: "Disk Space Low",
    description: "Free disk space on oliver-workstation20 is less than 5GB.",
    timestamp: "2023-09-29T17:30:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Low disk space threshold reached",
  },
  {
    endpoint: "matthew-server21",
    alertType: "Security Patch Missing",
    description: "A critical security patch is missing on matthew-server21.",
    timestamp: "2023-09-30T10:15:00Z",
    severity: "High",
    sourceIP: "Unknown",
    additionalInfo: "Vulnerability: CVE-2023-12345",
  },
  {
    endpoint: "emma-laptop22",
    alertType: "Unauthorized File Access",
    description: "An attempt to access sensitive files on emma-laptop22 was detected.",
    timestamp: "2023-09-30T17:45:00Z",
    severity: "High",
    sourceIP: "192.168.1.104",
    additionalInfo: "Accessed file: financial_report.xlsx",
  },
  {
    endpoint: "ava-desktop23",
    alertType: "Antimalware Update Failed",
    description: "The antimalware update on ava-desktop23 failed to download.",
    timestamp: "2023-09-30T13:25:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Failed to connect to update server",
  },
  {
    endpoint: "noah-server24",
    alertType: "Intrusion Attempt Detected",
    description: "An intrusion attempt was detected on noah-server24.",
    timestamp: "2023-09-30T14:55:00Z",
    severity: "High",
    sourceIP: "192.168.1.105",
    additionalInfo: "Intrusion attempt blocked",
  },
  {
    endpoint: "jacob-laptop19",
    alertType: "Failed Login Attempts",
    description: "Multiple failed login attempts were detected on jacob-laptop19.",
    timestamp: "2023-09-30T16:30:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "IP address: 192.168.1.106",
  },
  {
    endpoint: "grace-workstation25",
    alertType: "Software Installation",
    description: "Unauthorized software installation detected on grace-workstation25.",
    timestamp: "2023-09-30T18:10:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Installed software: unapproved_application.exe",
  },
  {
    endpoint: "olivia-laptop26",
    alertType: "Network Anomaly",
    description: "Unusual network traffic patterns detected on olivia-laptop26.",
    timestamp: "2023-09-30T16:20:00Z",
    severity: "Medium",
    sourceIP: "Unknown",
    additionalInfo: "Traffic spike in unusual ports",
  },
];
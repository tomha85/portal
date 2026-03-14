export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type CameraStatus = 'live' | 'delayed' | 'offline';

export interface KPI {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down';
}

export interface Facility {
  id: string;
  name: string;
  type: string;
  location: string;
  complianceScore: number;
  activeAlerts: number;
  cameras: number;
  lastIncident: string;
  topRisks: string[];
}

export interface Camera {
  id: string;
  name: string;
  facilityId: string;
  zone: string;
  status: CameraStatus;
  latencyMs: number;
  fps: number;
  modelPack: string;
  calibration: 'calibrated' | 'needs review';
  detections: string[];
  risk?: string;
}

export interface Alert {
  id: string;
  title: string;
  severity: Severity;
  site: string;
  facility: string;
  camera: string;
  timestamp: string;
  confidence: number;
  tags: string[];
  rule: string;
  assignee: string;
  status: 'new' | 'acknowledged' | 'in-review' | 'resolved' | 'false-positive';
}

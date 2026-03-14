import { Alert, Camera, Facility, KPI } from '@/types/domain';

export const kpis: KPI[] = [
  { id: '1', label: 'PPE Compliance', value: '94.2%', delta: '+1.8%', trend: 'up' },
  { id: '2', label: 'Violations Today', value: '138', delta: '-12', trend: 'down' },
  { id: '3', label: 'Active Alerts', value: '29', delta: '+4', trend: 'up' },
  { id: '4', label: 'Cameras Online', value: '242 / 256', delta: '14 offline', trend: 'down' },
  { id: '5', label: 'High-risk Zones Triggered', value: '17', delta: '-3', trend: 'down' },
  { id: '6', label: 'Avg Resolution', value: '11m 34s', delta: '-1m 20s', trend: 'down' }
];

export const facilities: Facility[] = [
  { id: 'f1', name: 'North Warehouse', type: 'Warehouse', location: 'Houston, TX', complianceScore: 96, activeAlerts: 5, cameras: 48, lastIncident: '2026-03-14T16:42:00Z', topRisks: ['No hardhat', 'Forklift proximity'] },
  { id: 'f2', name: 'Steel Forge Alpha', type: 'Steel Plant', location: 'Pittsburgh, PA', complianceScore: 89, activeAlerts: 11, cameras: 62, lastIncident: '2026-03-14T17:18:00Z', topRisks: ['No gloves', 'Restricted zone entry'] },
  { id: 'f3', name: 'PackLine 7', type: 'Packaging Line', location: 'Columbus, OH', complianceScore: 93, activeAlerts: 4, cameras: 36, lastIncident: '2026-03-14T14:09:00Z', topRisks: ['Hand on conveyor', 'No vest'] },
  { id: 'f4', name: 'Airport Apron East', type: 'Airport Apron', location: 'Phoenix, AZ', complianceScore: 91, activeAlerts: 6, cameras: 40, lastIncident: '2026-03-14T13:55:00Z', topRisks: ['Vehicle-pedestrian overlap', 'No goggles'] },
  { id: 'f5', name: 'Precision Manufacturing', type: 'Industrial Manufacturing', location: 'Detroit, MI', complianceScore: 88, activeAlerts: 9, cameras: 70, lastIncident: '2026-03-14T17:23:00Z', topRisks: ['Suspended load exposure', 'Machine zone breach'] }
];

export const cameras: Camera[] = Array.from({ length: 25 }).map((_, idx) => {
  const facility = facilities[idx % facilities.length];
  const statuses: Camera['status'][] = ['live', 'delayed', 'offline'];
  return {
    id: `cam-${idx + 1}`,
    name: `${facility.type.split(' ')[0]}-${String(idx + 1).padStart(2, '0')}`,
    facilityId: facility.id,
    zone: ['PPE-required zone', 'Restricted machine zone', 'Vehicle shared zone', 'Conveyor hazard zone'][idx % 4],
    status: statuses[idx % 3],
    latencyMs: 160 + idx * 8,
    fps: idx % 3 === 2 ? 0 : 22 + (idx % 6),
    modelPack: ['General PPE', 'Machine Safety', 'Vehicle Safety'][idx % 3],
    calibration: idx % 4 === 0 ? 'needs review' : 'calibrated',
    detections: ['helmet', 'vest', 'forklift', 'person'].slice(0, (idx % 4) + 1),
    risk: idx % 2 ? 'Forklift near worker' : undefined
  };
});

export const alerts: Alert[] = [
  { id: 'a1', title: 'No hardhat in steel casting bay', severity: 'critical', site: 'US-East', facility: 'Steel Forge Alpha', camera: 'Steel-07', timestamp: '2026-03-14T17:22:34Z', confidence: 0.97, tags: ['ppe', 'hardhat'], rule: 'Hardhat required in Zone B', assignee: 'Lena Ortiz', status: 'new' },
  { id: 'a2', title: 'Person under suspended load', severity: 'critical', site: 'US-Midwest', facility: 'Precision Manufacturing', camera: 'Ind-15', timestamp: '2026-03-14T17:17:00Z', confidence: 0.95, tags: ['suspended-load'], rule: 'No personnel under active crane route', assignee: 'A. Brooks', status: 'in-review' },
  { id: 'a3', title: 'Forklift and pedestrian overlap', severity: 'high', site: 'US-West', facility: 'Airport Apron East', camera: 'Air-04', timestamp: '2026-03-14T17:12:51Z', confidence: 0.9, tags: ['vehicle', 'shared-zone'], rule: 'Vehicle-pedestrian minimum distance', assignee: 'Ravi Singh', status: 'acknowledged' },
  { id: 'a4', title: 'No reflective vest at loading dock', severity: 'medium', site: 'US-South', facility: 'North Warehouse', camera: 'Ware-11', timestamp: '2026-03-14T16:58:11Z', confidence: 0.88, tags: ['vest'], rule: 'Hi-vis vest required', assignee: 'Dana Kim', status: 'new' }
];

export const complianceTrend = [
  { day: 'Mon', compliance: 92, target: 95 },
  { day: 'Tue', compliance: 93, target: 95 },
  { day: 'Wed', compliance: 94, target: 95 },
  { day: 'Thu', compliance: 93.5, target: 95 },
  { day: 'Fri', compliance: 94.2, target: 95 },
  { day: 'Sat', compliance: 95.1, target: 95 },
  { day: 'Sun', compliance: 94.4, target: 95 }
];

export const severityBreakdown = [
  { name: 'Critical', value: 18 },
  { name: 'High', value: 36 },
  { name: 'Medium', value: 52 },
  { name: 'Low', value: 30 }
];

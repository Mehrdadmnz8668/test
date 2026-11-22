export type VolumeOption = '30GB' | '50GB' | '100GB' | '200GB' | 'UNLIMITED';
export type DurationOption = '1M' | '3M' | '6M';

export interface PlanPreset {
  id: string; code: string; title: string; subtitle: string;
  volume: VolumeOption; volumeLabel: string; duration: DurationOption; durationLabel: string;
  priceToman: number; concurrentUsers: number; featured?: boolean; badge?: string; features: string[];
}

export interface ServerNode {
  id: string; name: string; country: string; city: string; flag: string;
  protocol: 'VLESS + REALITY' | 'Trojan + gRPC' | 'Hysteria 2';
  sampleLatencyMs: number; capacityPercent: number; status: 'optimal' | 'stable' | 'maintenance';
  useCase: string; endpointMasked: string;
}

export interface CustomerSubscription {
  id: string; planTitle: string; status: 'active' | 'expiring_soon' | 'expired';
  totalTrafficGb: number; usedTrafficGb: number; expiresAtJalali: string;
  remainingDays: number; concurrentLimit: number; subscriptionUrl: string; protocols: string[];
}

export interface OrderRecord {
  id: string; invoiceNumber: string; planTitle: string; volumeLabel: string; durationLabel: string;
  amountToman: number; discountToman: number; createdAtJalali: string; gateway: string;
  status: 'paid' | 'pending' | 'failed';
}

export interface FaqItem { id: string; category: string; categoryLabel: string; question: string; answer: string; }
export interface GuidePlatform { id: 'android' | 'ios' | 'windows' | 'macos'; label: string; primaryApp: string; secondaryApp: string; version: string; downloadLabel: string; steps: string[]; tip: string; }
export interface AdminUserItem { id: string; username: string; email: string; activePlan: string; usedGb: number; totalGb: number; status: 'active' | 'suspended' | 'expired'; joinedJalali: string; }
export interface AdminCouponItem { id: string; code: string; discountPercent: number; usedCount: number; maxUses: number; expiresJalali: string; active: boolean; }

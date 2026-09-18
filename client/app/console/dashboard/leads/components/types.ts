export interface Lead {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  contactMethod: string | null;
  query: string;
  status: string;
  createdAt: string;
}

export const PIPELINE_STAGES = [
  { value: 'Client Created', label: 'Client Created' },
  { value: 'Client Confirmed', label: 'Confirmed' },
  { value: 'Onboarding Created', label: 'Onboarding' },
  { value: 'Welcome Email', label: 'Welcome Email' },
];

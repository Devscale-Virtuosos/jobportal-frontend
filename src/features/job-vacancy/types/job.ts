export interface IJob {
  _id: string;
  userId: string;
  company: {
    _id: string;
    name: string;
    location: string;
  };
  title: string;
  description: string;
  requiredSkills: string[];
  experienceLevel: string;
  type: 'full_time' | 'part_time';
  placementType: 'onsite' | 'remote' | 'hybrid';
  location?: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

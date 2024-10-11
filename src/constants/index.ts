export const ROLE = {
  RECRUITER: 'recruiter',
  JOB_HUNTER: 'job_hunter',
};

export const EXPERIENCE_LEVEL = {
  JUNIOR: 'junior',
  MID_LEVEL: 'mid_level',
  SENIOR: 'senior',
};

export const EXPERIENCE_LEVEL_LABEL: Record<string, string> = {
  [EXPERIENCE_LEVEL.JUNIOR]: 'Junior',
  [EXPERIENCE_LEVEL.MID_LEVEL]: 'Mid-Level',
  [EXPERIENCE_LEVEL.SENIOR]: 'Senior',
};

export const JOB_TYPE = {
  FULL_TIME: 'full_time',
  PART_TIME: 'part_time',
  CONTRACT: 'contract',
  INTERNSHIP: 'internship',
};

export const JOB_TYPE_LABEL: Record<string, string> = {
  [JOB_TYPE.FULL_TIME]: 'Full Time',
  [JOB_TYPE.PART_TIME]: 'Part Time',
  [JOB_TYPE.CONTRACT]: 'Contract',
  [JOB_TYPE.INTERNSHIP]: 'Internship',
};

export const PLACEMENT_TYPE = {
  ON_SITE: 'on_site',
  REMOTE: 'remote',
  HYBRID: 'hybrid',
};

export const PLACEMENT_TYPE_LABEL: Record<string, string> = {
  [PLACEMENT_TYPE.ON_SITE]: 'On Site',
  [PLACEMENT_TYPE.REMOTE]: 'Remote',
  [PLACEMENT_TYPE.HYBRID]: 'Hybrid',
};

export const JOB_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  CLOSED: 'closed',
};

export const JOB_STATUS_LABEL: Record<string, string> = {
  [JOB_STATUS.DRAFT]: 'Draft',
  [JOB_STATUS.PUBLISHED]: 'Published',
  [JOB_STATUS.CLOSED]: 'Closed',
};
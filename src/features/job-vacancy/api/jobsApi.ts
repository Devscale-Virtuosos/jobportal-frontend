import { createRequest } from '@/lib/api';
import { IResponse } from '@/types';
import { IJob } from '@/types/entity';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getDataJobs = createRequest<IResponse<IJob[]>>(`${BASE_URL}/api/v1/jobs`);

export const getDataJobsById = (id: string) => createRequest<IResponse<IJob>>(`${BASE_URL}/api/v1/jobs/${id}`);

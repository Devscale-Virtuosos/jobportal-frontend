// src/api/jobaApi.ts
import { createRequest } from '@/lib/api';
import { IJob } from '../types/job';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// API function to get the list of jobs
export const getDataJobs = createRequest<{ message: string; data: IJob[] }>(`${BASE_URL}/api/v1/jobs`);

// API function to get job details by ID
export const getDataJobsById = (id: string) =>
  createRequest<{ message: string; data: IJob }>(`${BASE_URL}/api/v1/jobs/${id}`);

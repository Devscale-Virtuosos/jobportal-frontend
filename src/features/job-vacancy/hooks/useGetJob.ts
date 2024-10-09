// src/hooks/useJobs.ts
import { useQuery } from '@tanstack/react-query';
import { getDataJobs, getDataJobsById } from '../api/jobaApi';
import { IJob } from '../types/job'; // Adjust the path as necessary

export function useGetJobs() {
  return useQuery<{ message: string; data: IJob[] }>({
    queryKey: ['jobs'],
    queryFn: getDataJobs,
  });
}

export function useGetJobById(id: string) {
  return useQuery<{ message: string; data: IJob }>({
    queryKey: ['job', id],
    queryFn: getDataJobsById(id), // Call the function with the ID
  });
}

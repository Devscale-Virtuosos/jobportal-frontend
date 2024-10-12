// src/hooks/useGetJobList.ts
import { createRequest } from '@/lib/api';
import { IJob, IResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

// Hook to fetch the job list
export const useGetJobList = () => {
  return useQuery<IResponse<IJob[]>>({
    queryKey: ['application'], 
    queryFn: async () => {
      const response = await createRequest<IResponse<IJob[]>>(
        `${process.env.REACT_APP_BASE_URL}/api/v1/applications` 
      );
      return response.data; 
    },
    staleTime: 1000 * 60 * 5, 
  });
};

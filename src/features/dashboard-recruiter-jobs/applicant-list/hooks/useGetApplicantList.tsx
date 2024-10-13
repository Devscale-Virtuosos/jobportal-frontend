import { createRequest } from '@/lib/api';
import { IApplication, IResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetApplicantList = (jobId: string) => {
  return useQuery({
    queryKey: ['applications', jobId],
    queryFn: () =>
      createRequest<IResponse<IApplication[]>>(
        `${process.env.VITE_APP_BASE_URL}/api/v1/applications/:jobId`
      ),
    enabled: !!jobId, // Only run query if jobId is available
  });
};

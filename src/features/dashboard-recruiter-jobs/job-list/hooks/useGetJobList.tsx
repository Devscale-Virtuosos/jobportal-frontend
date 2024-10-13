import { createRequest } from '@/lib/api';
import { IJob, IResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetJobList = () => {
  const query = useQuery({
    queryKey: ['jobs'],
    queryFn: createRequest<IResponse<IJob[]>>(`${process.env.VITE_API_BASE_URL}/api/v1/jobs`),
  });

  return query;
};

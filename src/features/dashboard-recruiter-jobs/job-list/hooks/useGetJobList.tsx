import { createRequest } from '@/lib/api';
import { IJob, IResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetJobList = () => {
  const query = useQuery({
    queryKey: ['job-list'],
    queryFn: createRequest<IResponse<IJob[]>>(`${process.env.REACT_APP_BASE_URL}/api/v1/jobs`),
  });

  return query;
};

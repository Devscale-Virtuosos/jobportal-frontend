import { useQuery } from '@tanstack/react-query';
import { createRequest } from '@/lib/api';

export const useGetUserCompany = () => {
  const query = useQuery({
    queryKey: ['get-user-company'],
    queryFn: createRequest(`${process.env.REACT_APP_BASE_URL}/api/v1/users/company`, { credentials: 'include' }),
  });

  return query;
};

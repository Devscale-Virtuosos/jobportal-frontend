import { IResponse } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { createRequest } from '@/lib/api';
import { TJobDescriptionInput } from '../schema/job';

export const useGenerateJobDescription = () => {
  const mutation = useMutation<IResponse<string>, Error, TJobDescriptionInput>({
    mutationKey: ['generate-job-description'],
    mutationFn: async (payload) => {
      const requestFunc = createRequest<IResponse<string>>(
        `${process.env.REACT_APP_BASE_URL}/api/v1/jobs/generate/description`,
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        },
      );

      return requestFunc();
    },
  });

  return mutation;
};

import React from 'react';
import { JobHunterProfile } from './components/profile';
import { useGetUserCompany } from '@/features/dashboard-recruiter-company/hooks/use-user-company';

export default function JobHunterProfilePage() {
  const { data: result, isLoading } = useGetUserCompany();
  console.log({ result });
  return (
    <div>
      <JobHunterProfile />
    </div>
  );
}

// src/components/JobList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetJobs } from '../../hooks/useGetJob';
import { IJob } from '@/types/entity';

export const JobList: React.FC = () => {
  const { data, isLoading, error } = useGetJobs();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching jobs: {error.message}</div>;
  }

  return (
    <div>
      {data?.data.map((job: IJob) => (
        <Link key={job._id} to={`/jobs/${job._id}`}>
          <div className="mb-4 flex cursor-pointer items-center rounded-lg bg-gray-200 p-4 hover:bg-gray-300">
            <img src={job.companyId.logo} alt="Company Logo" className="mr-4 h-16 w-16" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p>{job.companyId.name || 'not available company'}</p>
              <p>
                {job.experienceLevel} | {job.placementType}
              </p>
              <p>{job.requiredSkills.join(', ')}</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>{new Date(job.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

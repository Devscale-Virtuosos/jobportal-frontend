import { Button } from '@/components/ui/button';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobById } from '../../hooks/useGetJob';
import { IJob } from '@/types/entity';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGetJobById(id || '');

  if (isLoading) {
    return <p>Loading job details...</p>;
  }

  if (error) {
    return <p>Error fetching job details: {error.message}</p>;
  }

  const job: IJob | undefined = data?.data;

  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
    <div className="rounded-lg bg-gray-100 p-6">
      <div className="mb-6 flex items-start">
        <img
          src={job.companyId.logo || 'https://via.placeholder.com/150'}
          alt="Company Logo"
          className="mr-6 h-24 w-24"
        />

        <div>
          <h1 className="text-2xl font-semibold">{job.title}</h1>
          <p className="text-gray-600">{job.companyId.name}</p>
          <p className="text-gray-600">
            {job.experienceLevel} | {job.placementType}
          </p>
          <p>{job.type}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Job Description</h2>
        <p>{job.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Required Skills</h2>
        <p>{job.requiredSkills.join(', ')}</p>
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          onClick={() => alert('Apply button clicked!')}
          className="rounded-lg bg-secondary-600 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-secondary-700"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDetail;

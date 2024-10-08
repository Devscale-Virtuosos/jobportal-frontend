import { Button } from '@/components/ui/button';
import React from 'react';
import { useParams } from 'react-router-dom';

const jobList = [
  {
    id: 1,
    jobTitle: 'Frontend Developer',
    companyName: 'Tech Corp',
    experienceLevel: 'Intermediate',
    placementType: 'Remote',
    skills: 'React, JavaScript, CSS',
    datePosted: 'Oct 5, 2024',
    description: `We are looking for a skilled Frontend Developer to join our team. You will be responsible for creating user interfaces using modern web technologies such as React and CSS.`,
    companyLogo: 'https://via.placeholder.com/50',
  },
];

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const job = jobList.find((job) => job.id === parseInt(id || '', 10));

  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
    <div className="rounded-lg bg-gray-100 p-6">
      <div className="mb-6 flex items-start">
        <img src={job.companyLogo} alt="Company Logo" className="mr-6 h-24 w-24" />
        <div>
          <h1 className="text-2xl font-semibold">{job.jobTitle}</h1>
          <p className="text-gray-600">{job.companyName}</p>
          <p className="text-gray-600">
            {job.experienceLevel} | {job.placementType}
          </p>
          <p className="text-gray-600">Posted on: {job.datePosted}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Job Description</h2>
        <p>{job.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Required Skills</h2>
        <p>{job.skills}</p>
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

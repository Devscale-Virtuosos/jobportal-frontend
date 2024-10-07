import React from 'react';
import { Link } from 'react-router-dom';
const jobList = [
  {
    id: 1,
    jobTitle: 'Frontend Developer',
    companyName: 'Tech Corp',
    experienceLevel: 'Intermediate',
    placementType: 'Remote',
    skills: 'React, JavaScript, CSS',
    date: 'Oct 5, 2024',
    companyLogo: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    jobTitle: 'Backend Developer',
    companyName: 'Dev Solutions',
    experienceLevel: 'Expert',
    placementType: 'Onsite',
    skills: 'Node.js, MongoDB, Express',
    date: 'Sep 29, 2024',
    companyLogo: 'https://via.placeholder.com/50',
  },
  {
    id: 3,
    jobTitle: 'UI/UX Designer',
    companyName: 'Design Studios',
    experienceLevel: 'Fresher',
    placementType: 'Hybrid',
    skills: 'Figma, Adobe XD, Sketch',
    date: 'Oct 1, 2024',
    companyLogo: 'https://via.placeholder.com/50',
  },
  {
    id: 4,
    jobTitle: 'Full Stack Developer',
    companyName: 'Innovative Tech',
    experienceLevel: 'Intermediate',
    placementType: 'Remote',
    skills: 'React, Node.js, PostgreSQL',
    date: 'Sep 30, 2024',
    companyLogo: 'https://via.placeholder.com/50',
  },
  {
    id: 5,
    jobTitle: 'Data Scientist',
    companyName: 'Data Analytics Ltd',
    experienceLevel: 'Expert',
    placementType: 'Remote',
    skills: 'Python, Machine Learning, SQL',
    date: 'Sep 28, 2024',
    companyLogo: 'https://via.placeholder.com/50',
  },
];

export const JobList: React.FC = () => {
  return (
    <div>
      {jobList.map((job) => (
        <Link key={job.id} to={`/jobs/${job.id}`}>
          <div className="mb-4 flex cursor-pointer items-center rounded-lg bg-gray-200 p-4 hover:bg-gray-300">
            <img src={job.companyLogo} alt="Company Logo" className="mr-4 h-16 w-16" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p>{job.companyName}</p>
              <p>
                {job.experienceLevel} | {job.placementType}
              </p>
              <p>{job.skills}</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>{job.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

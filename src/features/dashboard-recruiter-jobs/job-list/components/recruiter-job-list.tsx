import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use this for redirection
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import JobList from '@/features/job-vacancy/job-list/components/JobList'; // Import the JobList component

// Define a type for the job data
interface Job {
  id: string;
  title: string;
  status: string;
  experienceLevel: string;
}

export default function RecruiterJobListPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate fetching job data using dummy data
  useEffect(() => {
    setIsLoading(true);
    const dummyJobs: Job[] = [
      {
        id: '1',
        title: 'Frontend Developer',
        status: 'Pending',
        experienceLevel: 'Mid-level',
      },
      {
        id: '2',
        title: 'Backend Engineer',
        status: 'Interview Scheduled',
        experienceLevel: 'Senior',
      },
      {
        id: '3',
        title: 'Fullstack Developer',
        status: 'Hired',
        experienceLevel: 'Mid-level',
      },
    ];

    // Simulating a delay
    setTimeout(() => {
      setJobs(dummyJobs);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleCreateJob = () => {
    navigate('/dashboard/recruiter/create/jobs');
  };

  const handleEditJob = (jobId: string) => {
    navigate(`/dashboard/recruiter/edit/jobs/${jobId}`);
  };

  const handleDeleteJob = (jobId: string) => {
    // Add your delete logic here
    console.log(`Delete job with ID: ${jobId}`);
  };

  const handlePublishJob = (jobId: string) => {
    // Add your publish logic here
    console.log(`Publish job with ID: ${jobId}`);
  };

  const handleSeeApplicants = (jobId: string) => {
    navigate(`/dashboard/recruiter/jobs/${jobId}/applicants`);
  };

  return (
    <div className="mx-auto mt-16 flex w-3/5 flex-col gap-4">
      <div className="flex justify-end mb-4">
        <Button 
          className="bg-primary-500 hover:bg-primary-400 text-primary-100"
          onClick={handleCreateJob}
        >
          Create New Job
        </Button>
      </div>

      <Card className="border-primary-500">
        <CardHeader className="bg-primary-500 text-primary-100">
          <CardTitle>Your Job List:</CardTitle>
        </CardHeader>
        {isLoading ? (
          <div className="flex items-center justify-center py-4 text-primary-500">
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Loading jobs...
          </div>
        ) : (
          <Table className="bg-primary-100 text-primary-900">
            <TableHead className="bg-primary-500 text-primary-100">
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Experience Level</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <TableRow key={job.id} className="hover:bg-primary-200">
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.status}</TableCell>
                    <TableCell>{job.experienceLevel}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          className="bg-yellow-500 hover:bg-yellow-400 text-primary-100"
                          onClick={() => handleEditJob(job.id)}
                        >
                          Edit
                        </Button>
                        <Button 
                          className="bg-green-500 hover:bg-green-400 text-primary-100"
                          onClick={() => handlePublishJob(job.id)}
                        >
                          Publish
                        </Button>
                        <Button 
                          className="bg-red-500 hover:bg-red-400 text-primary-100"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          Delete
                        </Button>
                        <Button 
                          className="bg-blue-500 hover:bg-blue-400 text-primary-100"
                          onClick={() => handleSeeApplicants(job.id)}
                        >
                          See Applicants
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-primary-500">
                    No jobs available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </Card>

    </div>
  );
}

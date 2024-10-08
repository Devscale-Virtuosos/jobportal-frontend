import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use this for redirection
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

// Define a type for the job data
interface Job {
  id: string;
  company: {
    name: string;
    location: string;
  };
  title: string;
  appliedDate: string;
  status: string;
  experienceLevel: string;
}

export default function JobHunterJobListPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate fetching job data using dummy data
  useEffect(() => {
    setIsLoading(true);
    const dummyJobs: Job[] = [
      {
        id: '1',
        company: { name: 'Devscale', location: 'Indonesia' },
        title: 'Frontend Developer',
        appliedDate: '2024-09-25',
        status: 'Pending',
        experienceLevel: 'Mid-level',
      },
      {
        id: '2',
        company: { name: 'Virtuosos', location: 'Singapore' },
        title: 'Backend Engineer',
        appliedDate: '2024-09-20',
        status: 'Interview Scheduled',
        experienceLevel: 'Senior',
      },
      {
        id: '3',
        company: { name: 'Devirtu', location: 'Japan' },
        title: 'Fullstack Developer',
        appliedDate: '2024-09-15',
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

  const handleDetailsClick = (jobId: string) => {
    navigate(`/dashboard/job-hunter/jobs/${jobId}`);
  };

  return (
    <div className="mx-auto mt-16 flex w-3/5 flex-col gap-4">
      <Card className="border-primary-500">
        <CardHeader className="bg-primary-500 text-primary-100">
          <CardTitle>You Have Applied To:</CardTitle>
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
                <TableCell>Company Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Applied Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>More Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <TableRow key={job.id} className="hover:bg-primary-200">
                    <TableCell>{job.company.name}</TableCell>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{new Date(job.appliedDate).toLocaleDateString()}</TableCell>
                    <TableCell>{job.status}</TableCell>
                    <TableCell>
                      <Button
                        className="bg-primary-500 hover:bg-primary-400 text-primary-100"
                        onClick={() => handleDetailsClick(job.id)}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-primary-500">
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

import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const dummyJobs = [
  {
    id: '1',
    company: { name: 'Devscale', location: 'Indonesia' },
    title: 'Frontend Developer',
    jobType: 'Full-time',
    experienceLevel: 'Mid-level',
    description: 'Develop user-facing features.',
    status: 'Applied',
  },
];

export default function JobDetailsPage() {
  const navigate = useNavigate();

  const handleApplyMoreJobs = () => {
    navigate('/job-vacancy');
  };

  return (
    <div className="mx-auto mt-16 flex w-3/5 flex-col gap-4">
      <h1 className="text-2xl font-bold">Check These Updates!</h1>
      <Button 
        className="mb-4 bg-primary-500 hover:bg-primary-400 text-primary-100"
        onClick={handleApplyMoreJobs}
      >
        Apply for More Jobs
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="bg-primary-100 text-primary-900">
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Job Type</TableCell>
                <TableCell>Experience Level</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Resume</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {dummyJobs.length > 0 ? (
                dummyJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.company.name}</TableCell>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.jobType}</TableCell>
                    <TableCell>{job.experienceLevel}</TableCell>
                    <TableCell>{job.description}</TableCell>
                    <TableCell>{job.status}</TableCell>
                    <TableCell>
                      <Button className="bg-primary-500 hover:bg-primary-400 text-primary-100">
                        Upload Resume
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

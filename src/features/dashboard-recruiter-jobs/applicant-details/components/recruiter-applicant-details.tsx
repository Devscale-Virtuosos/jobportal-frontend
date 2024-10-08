import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Updated data with relevancyScore and resume
const dummyJobs = [
  {
    id: '1',
    name: 'Indra Arianggi Suryaatmaja',
    title: 'Front-end',
    jobType: 'Full-time',
    experienceLevel: 'Senior',
    relevancyScore: 99,
    status: 'Accepted',
    resume: 'file1.pdf',
  },
];

export default function RecruiterApplicantDetailsPage() {
  const navigate = useNavigate();

  const handleUpdateStatus = () => {
    navigate('/update-status');
  };

  const handleDownloadResume = (resume: string) => {
    // Functionality to handle resume download (you might replace this with actual file download logic)
    console.log(`Downloading resume: ${resume}`);
  };

  return (
    <div className="mx-auto mt-16 flex w-3/5 flex-col gap-4">
      <div className="flex justify-end mb-4">
        <Button 
          className="bg-primary-500 hover:bg-primary-400 text-primary-100"
          onClick={handleUpdateStatus}
        >
          Update Status
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="bg-primary-100 text-primary-900">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Job Type</TableCell>
                <TableCell>Experience Level</TableCell>
                <TableCell>Relevancy Score</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Resume</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {dummyJobs.length > 0 ? (
                dummyJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.name}</TableCell>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.jobType}</TableCell>
                    <TableCell>{job.experienceLevel}</TableCell>
                    <TableCell>{job.relevancyScore}</TableCell>
                    <TableCell>{job.status}</TableCell>
                    <TableCell>
                      <Button
                        className="bg-primary-500 hover:bg-primary-400 text-primary-100"
                        onClick={() => handleDownloadResume(job.resume)}
                      >
                        Download File
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

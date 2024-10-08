import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // UseParams for dynamic jobId
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

// Define a type for the applicant data
interface Applicant {
  id: string;
  name: string;
  experienceLevel: string;
  appliedDate: string;
  status: string;
}

export default function RecruiterApplicantListPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { jobId } = useParams(); // Get jobId from the URL

  // Simulate fetching applicant data using dummy data
  useEffect(() => {
    setIsLoading(true);
    const dummyApplicants: Applicant[] = [
      {
        id: '1',
        name: 'Indra Arianggi Suryaatmaja',
        experienceLevel: 'Senior',
        appliedDate: '2024-09-25',
        status: 'Accepted',
      },
      {
        id: '2',
        name: 'Singgih Septian Nugraha',
        experienceLevel: 'Senior',
        appliedDate: '2024-09-20',
        status: 'In-progress',
      },
      {
        id: '3',
        name: 'Annisa Jullia Chandra',
        experienceLevel: 'Entry',
        appliedDate: '2024-09-15',
        status: 'Reviewed',
      },
    ];

    // Simulating a delay
    setTimeout(() => {
      setApplicants(dummyApplicants);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleDetailsClick = (applicantId: string) => {
    // Navigates to the applicant details page
    navigate(`/dashboard/recruiter/jobs/${jobId}/applicants/${applicantId}`);
  };

  return (
    <div className="mx-auto mt-16 flex w-3/5 flex-col gap-4">
      <Card className="border-primary-500">
        <CardHeader className="bg-primary-500 text-primary-100">
          <CardTitle>Applicant List:</CardTitle>
        </CardHeader>
        {isLoading ? (
          <div className="flex items-center justify-center py-4 text-primary-500">
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Loading applicants...
          </div>
        ) : (
          <Table className="bg-primary-100 text-primary-900">
            <TableHead className="bg-primary-500 text-primary-100">
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Experience Level</TableCell>
                <TableCell>Applied Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>More Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applicants.length > 0 ? (
                applicants.map((applicant) => (
                  <TableRow key={applicant.id} className="hover:bg-primary-200">
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.experienceLevel}</TableCell>
                    <TableCell>{new Date(applicant.appliedDate).toLocaleDateString()}</TableCell>
                    <TableCell>{applicant.status}</TableCell>
                    <TableCell>
                      <Button
                        className="bg-primary-500 hover:bg-primary-400 text-primary-100"
                        onClick={() => handleDetailsClick(applicant.id)}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-primary-500">
                    No applicants available.
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

import Container from '@/components/shared/container';

import JobDetailsPage from './component/jobhunter-job-details';

export default function JobHunterDetailsPage() {
  return (
    <Container>
      <div className="py-10">
        <JobDetailsPage />
      </div>
    </Container>
  );
}

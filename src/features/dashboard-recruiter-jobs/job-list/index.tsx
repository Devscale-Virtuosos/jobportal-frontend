import Container from '@/components/shared/container';

import RecruiterJobListPage from './components/recruiter-job-list';

export default function RecruiterJobList() {
  return (
    <Container>
      <div className="py-10">
        <RecruiterJobListPage />
      </div>
    </Container>
  );
}

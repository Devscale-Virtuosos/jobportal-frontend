import Container from '@/components/shared/container';

import CreateNewJobPage from './compontents/recruiter-create-job';

export default function RecruiterCreateJob() {
  return (
    <Container>
      <div className="py-10">
        <CreateNewJobPage />
      </div>
    </Container>
  );
}

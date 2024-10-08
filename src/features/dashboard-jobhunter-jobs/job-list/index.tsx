import Container from '@/components/shared/container';

import JobHunterJobListPage from './component/jobhunter-job-list';

export default function JobHunterList() {
  return (
    <Container>
      <div className="py-10">
        <JobHunterJobListPage />
      </div>
    </Container>
  );
}

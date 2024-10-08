import CreateJob from './components/link-create-job';
import { JobListTable } from './components/table-job-list';

export default function RecruiterJobListPage() {
  return (
    <div>
      <CreateJob />
      <JobListTable />
    </div>
  );
}

import { useGetUserCompany } from './hooks/use-user-company';

export default function DashboardRecruiterCampany() {
  const { data, isLoading } = useGetUserCompany();
  console.log({ data, isLoading });

  if (isLoading) return <>Loading...</>;

  return <div>{data && <p>{data.data.name}</p>}</div>;
}

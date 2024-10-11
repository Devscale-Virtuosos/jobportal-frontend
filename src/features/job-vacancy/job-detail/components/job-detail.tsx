import React from 'react';
import { useParams } from 'react-router-dom';
import { Building } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EditorPreview } from '@/components/shared/editor-preview';
import { EXPERIENCE_LEVEL_LABEL, JOB_TYPE_LABEL, PLACEMENT_TYPE_LABEL } from '@/constants';
import { IJob } from '@/types/entity';
import { useGetJobById } from '../../hooks/useGetJob';
import { JobDetailSkeleton } from './job-detail-skeleton';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGetJobById(id || '');

  if (isLoading) {
    return <JobDetailSkeleton />;
  }

  if (error) {
    return <p>Error fetching job details: {error.message}</p>;
  }

  const job: IJob | undefined = data?.data;

  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={job.companyId.logo} />
          <AvatarFallback className="bg-zinc-200">
            <Building size={30} />
          </AvatarFallback>
        </Avatar>
        <section>
          <CardTitle className="text-3xl">{job.title}</CardTitle>
          <h4 className="text-zinc-400">
            {job.companyId.name} &#x2022; {job.location}
          </h4>
          <p className="mb-2">
            {PLACEMENT_TYPE_LABEL[job.placementType]} &#x2022; {JOB_TYPE_LABEL[job.type]} &#x2022;{' '}
            {EXPERIENCE_LEVEL_LABEL[job.experienceLevel]}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {job.requiredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-1 whitespace-nowrap rounded-md bg-zinc-200 px-2 py-1 text-xs"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section className="flex-auto text-right">
          <Button type="button" className="bg-primary-500 hover:bg-primary-400">
            Apply Now
          </Button>
        </section>
      </CardHeader>
      <CardContent className="mt-4 flex flex-col gap-4">
        <h4 className="text-xl font-bold">About the job</h4>
        <EditorPreview value={job.description} />
      </CardContent>
    </Card>
  );
};

export default JobDetail;

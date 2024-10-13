// src/components/applicant-columns.ts
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

interface Applicant {
  id: string;
  name: string;
  title: string;
  jobType: string;
  experienceLevel: string;
  relevancyScore: number;
  status: string;
  resume: string;
}

export const applicantColumns: ColumnDef<Applicant>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'jobType',
    header: 'Job Type',
    cell: ({ row }) => <div>{row.getValue('jobType')}</div>,
  },
  {
    accessorKey: 'experienceLevel',
    header: 'Experience Level',
    cell: ({ row }) => <div className="capitalize">{row.getValue('experienceLevel')}</div>,
  },
  {
    accessorKey: 'relevancyScore',
    header: 'Relevancy Score',
    cell: ({ row }) => <div>{row.getValue('relevancyScore')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div>{row.getValue('status')}</div>,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const job = row.original;
      return (
        <Button
          variant="link"
          onClick={() => {
            // Handle download or other actions
            console.log(`Download resume for: ${job.resume}`);
          }}
        >
          Download Resume
        </Button>
      );
    },
  },
];

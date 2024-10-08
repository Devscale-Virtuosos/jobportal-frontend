import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Job = {
  id: string;
  title: string;
  status: 'open' | 'closed';
  experienceLevel: 'junior' | 'mid' | 'senior';
};

export const jobColumns: ColumnDef<Job>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'experienceLevel',
    header: 'Experience Level',
    cell: ({ row }) => <div className="capitalize">{row.getValue('experienceLevel')}</div>,
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const job = row.original;

      const handleEdit = () => {
        console.log('Edit job:', job.id);
      };

      const handlePublish = () => {
        console.log('Publish job:', job.id);
      };

      const handleDelete = () => {
        console.log('Delete job:', job.id);
      };

      return (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="outline" size="sm" onClick={handlePublish}>
            Publish
          </Button>
          <Button variant="destructive" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      );
    },
  },
];

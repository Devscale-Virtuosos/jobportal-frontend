// src/components/job-column-table.tsx
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye, MoreHorizontal, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IJob } from '@/types';

export const jobColumns: ColumnDef<IJob>[] = [
  {
    accessorKey: 'company.name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Company Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('company.name')}</div>,
  },
  {
    accessorKey: 'company.location',
    header: 'Location',
    cell: ({ row }) => <div>{row.getValue('company.location')}</div>,
  },
  {
    accessorKey: 'appliedDate',
    header: 'Applied Date',
    cell: ({ row }) => <div>{new Date(row.getValue('appliedDate')).toLocaleDateString()}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const job = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link to={`/dashboard/job-hunter/jobs/${job._id}`}>
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                Details
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Change Status
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];













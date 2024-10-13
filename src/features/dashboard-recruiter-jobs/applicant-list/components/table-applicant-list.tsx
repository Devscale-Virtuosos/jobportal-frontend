import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
import { applicantColumns } from './applicant-column-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Loader2 } from 'lucide-react';
import ApplicantListHeader from './applicant-list-header';
import { useGetApplicantList } from '../hooks/useGetApplicantList'; 
import { useParams } from 'react-router-dom';

export default function RecruiterApplicantListPage() {
  const { jobId } = useParams<{ jobId: string }>(); 


  const { data, isLoading, error } = useGetApplicantList(jobId || ''); 

  const applicants = data?.data?.map((applicant) => ({
    id: applicant._id, 
    name: applicant.user.name, 
    title: applicant.jobDetail.title, 
    jobType: applicant.jobDetail.description, 
    experienceLevel: applicant.jobDetail.experienceLevel, 
    relevancyScore: applicant.relevancyScore,
    status: applicant.status,
    resume: applicant.resumeId, 
  })) || [];

  const table = useReactTable({
    data: applicants, 
    columns: applicantColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="mx-auto flex h-screen flex-col gap-4 overflow-scroll pb-12">
      <ApplicantListHeader />
      {isLoading ? (
        <div className="flex items-center justify-center py-4">
          <Loader2 className="mr-2 h-6 w-6 animate-spin" />
          Loading applicants...
        </div>
      ) : error ? (
        <div className="text-red-500">Error loading applicants.</div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={applicantColumns.length} className="text-center">
                    No applicants available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

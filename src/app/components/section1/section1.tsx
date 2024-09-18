import React, { forwardRef, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/table-utils/data-table';
import { Checkbox } from '@/components/ui/checkbox';

const Section1 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [rowSelection, setRowSelection] = useState<any>([]);

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' },
    { id: 6, name: 'Diana Evans', email: 'diana@example.com' },
    { id: 7, name: 'Edward Fox', email: 'edward@example.com' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com' },
    { id: 9, name: 'George Hall', email: 'george@example.com' },
    { id: 10, name: 'Hannah Ives', email: 'hannah@example.com' },
    { id: 11, name: 'Isaac James', email: 'isaac@example.com' },
    { id: 12, name: 'Julia King', email: 'julia@example.com' },
    { id: 13, name: 'Kevin Lee', email: 'kevin@example.com' },
    { id: 14, name: 'Laura Moore', email: 'laura@example.com' },
    { id: 15, name: 'Michael Nelson', email: 'michael@example.com' },
    { id: 16, name: 'Nina O Connor', email: 'nina@example.com' },
    { id: 17, name: 'Oscar Perez', email: 'oscar@example.com' },
    { id: 18, name: 'Patricia Quinn', email: 'patricia@example.com' },
    { id: 19, name: 'Quincy Reed', email: 'quincy@example.com' },
    { id: 20, name: 'Rachel Smith', email: 'rachel@example.com' },
  ];

  const handleSelectAll = (visibleRows: number[]) => {
    const isAllSelected = visibleRows.every(id => rowSelection.includes(id));
    const newSelection = isAllSelected ?
      rowSelection.filter((id: any) => !visibleRows.includes(id)) :
      [...rowSelection, ...visibleRows.filter(id => !rowSelection.includes(id))];
    setRowSelection(newSelection);
  };

  const handleRowSelect = (id: number) => {
    setRowSelection((prev: any) =>
      prev.includes(id) ? prev.filter((rowId: any) => rowId !== id) : [...prev, id]
    );
  };

  const columns: ColumnDef<typeof data[0]>[] = [
    {
      id: 'select',
      header: ({ table }) => {
        const visibleRowIds = table.getRowModel().rows.map(row => row.original.id);
        const isAllSelected = visibleRowIds.every(id => rowSelection.includes(id));
        return (
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={() => handleSelectAll(visibleRowIds)}
            />
        );
      },
      cell: ({ row }) => {
        return (
          <Checkbox
            checked={rowSelection.includes(row.original.id)}
            onCheckedChange={() => handleRowSelect(row.original.id)}
          />
        );
      },
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
  ];
  
  return (
    <div id="section1" ref={ref} className="h-[auto] p-4">
      <DataTable
        data={data}
        columns={columns}
        totalCount={data.length}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </div>
  );
});

export default Section1;

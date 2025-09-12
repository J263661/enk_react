import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Order } from "./types";

type ReportTableProps = {
  data: Order[];
  columns: TableColumn<Order>[];
  isLoading: boolean;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
   className?: string;
};

const ReportTable: React.FC<ReportTableProps> = ({
  data,
  columns,
  isLoading,
  searchTerm,
  setSearchTerm,
    className = "",
}) => {
  return (
   <div className={className}>
      {/* Search */}
      {data.length > 0 && (
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="border px-3 py-2 rounded-md text-sm w-full md:w-1/4 "
          />
        </div>
      )}

      {/* Table */}
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="400px"
        progressPending={isLoading}
        
      />
    </div>
  );
};

export default ReportTable;

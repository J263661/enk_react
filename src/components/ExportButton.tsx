// ExportButton.tsx
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { format } from "date-fns";
import { Order } from "./Types";

export type ExportButtonProps = {
  data: Order[];
  fileName?: string;
};

export function ExportButton({ data, fileName = "Report" }: ExportButtonProps) {
  const handleExport = () => {
    if (!data || data.length === 0) {
      alert("No data available to export!");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(
      data.map((row) => ({
        ID: row.id,
        Name: row.name,
        "Level 1": row.level1,
        "Level 2": row.level2,
        "Order Type": row.orderType,
        Status: row.status,
        Quantity: row.quantity,
        "Order Date": format(row.orderDate, "yyyy-MM-dd"),
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}_${format(new Date(), "yyyyMMdd_HHmmss")}.xlsx`);
  };

  return (
    <button
      onClick={handleExport}
      disabled={!data || data.length === 0}
      className="bg-[#d2344a]  text-white px-4 py-2 rounded-md text-sm hover:bg-[#9e3543] disabled:opacity-50 transition"
    >
      Export to Excel
    </button>
  );
}

export default ExportButton;

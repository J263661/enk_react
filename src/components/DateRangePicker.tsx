import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

type DatePickerInputProps = {
  label: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

export const DatePickerInput: React.FC<DatePickerInputProps> = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>

      <div
        className="flex items-center border rounded-md px-3 py-2 cursor-pointer bg-white dark:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        <input
          type="text"
          readOnly
          value={value ? format(value, "yyyy-MM-dd") : ""}
          placeholder="Select date"
          className="flex-1 bg-transparent outline-none dark:text-white cursor-pointer"
        />
        <CalendarIcon className="w-4 h-4 text-gray-500" />
      </div>

      {open && (
        <div className="absolute top-full mt-2 px-1 z-50 bg-white dark:bg-gray-800 border rounded-md shadow-lg">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};
import React from "react";

type GetReportButtonProps = {
  onClick: () => void;
};

const GetReportButton: React.FC<GetReportButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
    >
      Get Report
    </button>
  );
};

export default GetReportButton;

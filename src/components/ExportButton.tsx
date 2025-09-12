import React from "react";

type ExportButtonProps = {
  onClick: () => void;
};

const ExportButton: React.FC<ExportButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition"
    >
      Export to Excel
    </button>
  );
};

export default ExportButton;

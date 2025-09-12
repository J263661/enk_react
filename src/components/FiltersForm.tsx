import React from "react";

type FieldValue = string;

type FilterFormProps = {
  name: FieldValue;
  level1: FieldValue;
  level2: FieldValue;
  orderType: FieldValue;
  status: FieldValue;
  setName: (value: FieldValue) => void;
  setLevel1: (value: FieldValue) => void;
  setLevel2: (value: FieldValue) => void;
  setOrderType: (value: FieldValue) => void;
  setStatus: (value: FieldValue) => void;
};


const FilterForm: React.FC<FilterFormProps> = ({
  name,
  level1,
  level2,
  orderType,
  status,
  setName,
  setLevel1,
  setLevel2,
  setOrderType,
  setStatus,
}) => {
  return (
    <>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
          placeholder="Enter name"
        />
      </div>

      {/* Level 1 */}
      <div>
        <label className="block text-sm font-medium mb-1">Level 1</label>
        <select
          value={level1}
          onChange={(e) => setLevel1(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">ALL</option>
          <option value="ACHCHI">ACHCHI</option>
          <option value="AHPREPAID">AHPREPAID PVT. LTD.</option>
        </select>
      </div>

      {/* Level 2 */}
      <div>
        <label className="block text-sm font-medium mb-1">Level 2</label>
        <select
          value={level2}
          onChange={(e) => setLevel2(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">ALL</option>
          <option value="168">168 Cell Phone Repair</option>
          <option value="3D">3D Wireless LLC</option>
        </select>
      </div>

      {/* Order Type */}
      <div>
        <label className="block text-sm font-medium mb-1">Order Type</label>
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">ALL</option>
          <option value="Activation">Activation</option>
          <option value="Recharge">Recharge</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">ALL</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </>
  );
};

export default React.memo(FilterForm);

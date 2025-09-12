export type FieldValue = string; // only string to match input/select
export type Order = {
  id: number;
  name: string;
  level1: string;
  level2: string;
  orderType: string;
  status: string;
  quantity: number;
  orderDate: Date;
};

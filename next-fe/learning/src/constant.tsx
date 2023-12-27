export const API_URL = "http://localhost:4000";
export const GET = "GET";

export interface todoItem {
  _id: string;
  title: string;
  iscompleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

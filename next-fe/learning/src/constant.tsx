export const API_URL = "http://localhost:4000";
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";

export interface todoItem {
  _id: string;
  title: string;
  iscompleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface productItem {
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  totalPrice: number;
  _id: string;
  __v: 0;
}

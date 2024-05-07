import CONSTANTS from "@/constants/constants";
import { Product } from "@/types/products.types";

const path = "/bp/products";
const { baseUrl, authorId } = CONSTANTS;
const url = `${baseUrl}${path}`;

const headers: HeadersInit = new Headers();
headers.set("Content-Type", "application/json");
headers.set("authorId", authorId);

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const data = await fetch(url, {
      method: "GET",
      headers,
    });
    const dataJson = await data.json();
    return dataJson as Product[];
  } catch (e: any) {
    throw new Error(e.message);
  }
};

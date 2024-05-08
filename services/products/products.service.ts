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

export const insertProduct = async (product: Product): Promise<Product> => {
  try {
    const data = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(product),
    });
    const dataJson = await data.json();
    return dataJson as Product;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updateProduct = async (product: Product): Promise<Product> => {
  try {
    const data = await fetch(`${url}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(product),
    });
    const dataJson = await data.json();
    return dataJson as Product;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await fetch(`${url}?id=${id}`, {
      method: "DELETE",
      headers,
    });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const verifyProduct = async (id: string): Promise<boolean> => {
  try {
    const data = await fetch(`${url}/verification?id=${id}`, {
      method: "GET",
      headers,
    });
    const dataJson = await data.json();
    return dataJson as boolean;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

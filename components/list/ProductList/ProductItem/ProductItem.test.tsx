import React from "react";

import ProductItem from "./ProductItem";
import { render } from "@/setupTests";
import { Product } from "@/types/products.types";

const mockProduct: Product = {
  id: "1",
  name: "Product",
  description: "Description",
  date_release: "2024-05-20",
  date_revision: "2025-05-20",
  logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
};

describe("ProductItem", () => {
  it("renders with default props", () => {
    render(<ProductItem product={mockProduct} />);
  });
});

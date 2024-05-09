import React from "react";

import ProductList from "./ProductList";
import { render } from "@/setupTests";

const mockProducts = [
  {
    id: "1",
    name: "Product",
    description: "Description",
    date_release: "2024-05-20",
    date_revision: "2025-05-20",
    logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
  },
];

describe("ProductList", () => {
  it("renders with default props", () => {
    render(
      <ProductList products={mockProducts} isError={false} isLoading={false} />
    );
  });
  it("renders with loading state", () => {
    render(<ProductList products={[]} isError={false} isLoading={true} />);
  });
  it("renders with error state", () => {
    render(<ProductList products={[]} isError={true} isLoading={false} />);
  });
  it("renders with empty state", () => {
    render(<ProductList products={[]} isError={false} isLoading={false} />);
  });
});

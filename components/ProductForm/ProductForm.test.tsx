import React from "react";

import ProductForm from "./ProductForm";
import { render } from "setupTests";

describe("ProductForm", () => {
  it("renders with default props", () => {
    render(<ProductForm />);
  });
});

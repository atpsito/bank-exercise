import React from "react";

import ProductList from "./ProductList";
import { render } from "setupTests";

describe("ProductList", () => {
  it("renders with default props", () => {
    render(<ProductList />);
  });
});

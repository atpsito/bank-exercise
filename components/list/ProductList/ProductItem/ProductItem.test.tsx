import React from "react";

import ProductItem from "./ProductItem";
import { render } from "setupTests";

describe("ProductItem", () => {
  it("renders with default props", () => {
    render(<ProductItem />);
  });
});

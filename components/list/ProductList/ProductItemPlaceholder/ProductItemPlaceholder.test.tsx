import React from "react";

import ProductItemPlaceholder from "./ProductItemPlaceholder";
import { render } from "@/setupTests";

describe("ProductItemPlaceholder", () => {
  it("renders with default props", () => {
    render(<ProductItemPlaceholder />);
  });
});

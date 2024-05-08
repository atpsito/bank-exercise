import React from "react";

import DetailsScreen from "./DetailsScreen";
import { render } from "setupTests";

describe("DetailsScreen", () => {
  it("renders with default props", () => {
    render(<DetailsScreen />);
  });
});

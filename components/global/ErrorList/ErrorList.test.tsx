import React from "react";

import ErrorList from "./ErrorList";
import { render } from "setupTests";

describe("ErrorList", () => {
  it("renders with default props", () => {
    render(<ErrorList />);
  });
});

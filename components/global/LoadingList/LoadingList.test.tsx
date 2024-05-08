import React from "react";

import LoadingList from "./LoadingList";
import { render } from "setupTests";

describe("LoadingList", () => {
  it("renders with default props", () => {
    render(<LoadingList />);
  });
});

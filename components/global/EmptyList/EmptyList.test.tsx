import React from "react";

import EmptyList from "./EmptyList";
import { render } from "@/setupTests";

describe("EmptyList", () => {
  it("renders with default props", () => {
    render(<EmptyList />);
  });
});

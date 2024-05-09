import React from "react";

import ListScreen from "./ListScreen";
import { render } from "@/setupTests";

describe("ListScreen", () => {
  it("renders with default props", () => {
    render(<ListScreen />);
  });
});

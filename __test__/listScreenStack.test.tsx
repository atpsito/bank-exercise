import React from "react";

import { render } from "@/setupTests";
import ListScreenStack from "@/app/(bank)";

describe("Home", () => {
  it("renders with default props", () => {
    render(<ListScreenStack />);
  });
});
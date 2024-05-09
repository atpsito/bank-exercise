import React from "react";

import { render } from "@/setupTests";
import EditScreenStack from "@/app/(bank)/[productId]/edit";

describe("Home", () => {
  it("renders with default props", () => {
    render(<EditScreenStack />);
  });
});

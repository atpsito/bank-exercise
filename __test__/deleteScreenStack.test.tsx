import React from "react";

import { render } from "@/setupTests";
import DeleteScreenStack from "@/app/(bank)/[productId]/delete";

describe("Home", () => {
  it("renders with default props", () => {
    render(<DeleteScreenStack />);
  });
});

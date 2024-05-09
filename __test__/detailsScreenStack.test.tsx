import React from "react";

import { render } from "@/setupTests";
import DetailsScreenStack from "@/app/(bank)/[productId]/details";

describe("Home", () => {
  it("renders with default props", () => {
    render(<DetailsScreenStack />);
  });
});

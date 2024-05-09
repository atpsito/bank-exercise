import React from "react";

import { render } from "@/setupTests";
import CreateScreenStack from "@/app/(bank)/create";

describe("Home", () => {
  it("renders with default props", () => {
    render(<CreateScreenStack />);
  });
});

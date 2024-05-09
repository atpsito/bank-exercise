import React from "react";

import CreateScreen from "./CreateScreen";
import { render } from "@/setupTests";

describe("CreateScreen", () => {
  it("renders with default props", () => {
    render(<CreateScreen />);
  });
});

import React from "react";

import TextInput from "./TextInput";
import { render } from "setupTests";

describe("TextInput", () => {
  it("renders with default props", () => {
    render(<TextInput />);
  });
});

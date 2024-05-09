import React from "react";
import { Text } from "react-native";

import Providers from "./Providers";
import { render } from "@/setupTests";

describe("Providers", () => {
  it("renders with default props", () => {
    render(
      <Providers>
        <Text>Test</Text>
      </Providers>
    );
  });
});

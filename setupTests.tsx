import "@testing-library/jest-native/extend-expect";
import "expo-router/testing-library";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";

import { RenderOptions, cleanup } from "@testing-library/react-native";
import { render as rtlRender } from "@testing-library/react-native";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Providers from "@/components/global/Providers/Providers";

beforeAll(() => {
  dayjs.extend(customParseFormat);
  dayjs.extend(utc);
});
afterEach(cleanup);

interface WrapperProps {
  children?: ReactNode;
}

export const render = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const { ...returnOptions } = options;

  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = (props) => {
    const { children } = props;
    const Screen = () => <View>{children}</View>;
    return (
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Screen />
      </SafeAreaProvider>
    );
  };
  // Return renderer function with base options set
  return {
    ...appRender(ui, { wrapper: Wrapper, ...returnOptions }),
  };
};

export const appRender = (
  ui: React.ReactElement,
  options: RenderOptions = {}
) => {
  const { wrapper, ...returnOptions } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = (props) => {
    const { children } = props;
    const InnerWrapper = wrapper ? wrapper : (props: any) => props.children;
    return (
      <Providers>
        <InnerWrapper>{children}</InnerWrapper>
      </Providers>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions }),
  };
};

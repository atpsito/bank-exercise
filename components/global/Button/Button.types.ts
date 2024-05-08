// Interfaces and types from component Button

import { TouchableOpacityProps } from "react-native";

// Component Props
export interface ButtonProps extends Omit<TouchableOpacityProps, "children"> {
  children: string;
  buttonType?: "PRIMARY" | "INFO" | "DANGER";
}

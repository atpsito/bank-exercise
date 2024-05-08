// Interfaces and types from component TextInput
import { TextInputProps as RNTextInputProps } from "react-native";

// Component Props
export interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
}

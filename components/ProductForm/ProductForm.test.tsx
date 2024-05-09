import React from "react";

import ProductForm from "./ProductForm";
import { render } from "@/setupTests";
import { act, fireEvent, waitFor } from "@testing-library/react-native";

jest.mock("@/services/products/products.service", () => ({
  verifyProduct: jest.fn(),
}));

jest.mock("@/services/products/products.service.hooks", () => ({
  useInsertProduct: () => ({
    mutateAsync: jest.fn(),
    isPending: false,
  }),
  useUpdateProduct: () => ({
    mutateAsync: jest.fn(),
    isPending: false,
  }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

describe("ProductForm", () => {
  it("renders with default props", () => {
    render(<ProductForm />);
  });

  it("renders form fields", () => {
    const { getByText } = render(<ProductForm />);
    expect(getByText("ID")).toBeTruthy();
    expect(getByText("Nombre")).toBeTruthy();
    expect(getByText("Descripción")).toBeTruthy();
    expect(getByText("Logo")).toBeTruthy();
    expect(getByText("Fecha Liberación")).toBeTruthy();
    expect(getByText("Fecha Revisión")).toBeTruthy();
  });

  it("validates name field", async () => {
    const renderProps = render(<ProductForm />);
    const { getByPlaceholderText, getByText, getByTestId } = renderProps;
    const nameInput = getByPlaceholderText("Nombre");

    // Test for required error
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Nombre")).toHaveTextContent(
          "Este campo es requerido!"
        )
      );
    });

    // Test for min length error
    fireEvent.changeText(nameInput, "ab");
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Nombre")).toHaveTextContent("Mínimo 3 caracteres")
      );
    });

    // Test for max length error
    fireEvent.changeText(nameInput, "a".repeat(201));
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Nombre")).toHaveTextContent("Máximo 200 caracteres")
      );
    });
  });

  it("validates description field", async () => {
    const renderProps = render(<ProductForm />);
    const { getByPlaceholderText, getByText, getByTestId } = renderProps;
    const descriptionInput = getByPlaceholderText("Descripción");

    // Test for required error
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Descripción")).toHaveTextContent(
          "Este campo es requerido!"
        )
      );
    });

    // Test for min length error
    fireEvent.changeText(descriptionInput, "a".repeat(9));
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByText("Mínimo 10 caracteres")).toBeTruthy()
      );
    });

    // Test for max length error
    fireEvent.changeText(descriptionInput, "a".repeat(201));
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByText("Máximo 200 caracteres")).toBeTruthy()
      );
    });
  });

  it("validates logo field", async () => {
    const renderProps = render(<ProductForm />);
    const { getByPlaceholderText, getByText, getByTestId } = renderProps;
    const logoInput = getByPlaceholderText("Logo");

    // Test for required error
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Logo")).toHaveTextContent(
          "Este campo es requerido!"
        )
      );
    });
    // Test for URL error
    fireEvent.changeText(logoInput, "not a url");
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Logo")).toHaveTextContent("URL no válida")
      );
    });
  });

  it("validates date_release field", async () => {
    const renderProps = render(<ProductForm />);
    const { getByPlaceholderText, getByText, getByTestId } = renderProps;
    const dateReleaseInput = getByPlaceholderText("Fecha Liberación");

    // Test for required error
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Fecha Liberación")).toHaveTextContent(
          "Este campo es requerido!"
        )
      );
    });

    // Test for date error
    fireEvent.changeText(dateReleaseInput, "01/01/2000");
    await act(async () => {
      fireEvent.press(getByText("Enviar"));
      await waitFor(() =>
        expect(getByTestId("Fecha Liberación")).toHaveTextContent(
          "La fecha de lanzamiento debe ser hoy o en el futuro"
        )
      );
    });
  });

  it("automatically sets date_revision field to one year after date_release", async () => {
    const { getByPlaceholderText } = render(<ProductForm />);
    const dateReleaseInput = getByPlaceholderText("Fecha Liberación");
    const dateRevisionInput = getByPlaceholderText("Fecha Revisión");

    fireEvent.changeText(dateReleaseInput, "01/01/2023");
    await act(async () => {
      expect(dateRevisionInput.props.value).toBe("01/01/2024");
    });

    fireEvent.changeText(dateReleaseInput, "15/05/2025");
    await act(async () => {
      expect(dateRevisionInput.props.value).toBe("15/05/2026");
    });

    fireEvent.changeText(dateReleaseInput, "31/12/2022");
    await act(async () => {
      expect(dateRevisionInput.props.value).toBe("31/12/2023");
    });
  });
});

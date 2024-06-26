// Import necessary libraries and components
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

const renderComponent = () => {
  return render(<App />);
};

describe("<App />", () => {
  it("renders without crashing", () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
  });

  it("should render the page title", () => {
    renderComponent();
    expect(screen.getByText("Flex Card")).toBeInTheDocument();
  });

  it("should render the page subtitle", () => {
    renderComponent();
    expect(screen.getByText("Used for pre-tax purchases")).toBeInTheDocument();
  });

  it("should render the Card component", () => {
    renderComponent();
    expect(screen.getByTestId("card-component")).toBeInTheDocument();
  });

  it("should render the Checkbox component", () => {
    renderComponent();
    expect(screen.getByTestId("checkbox-component")).toBeInTheDocument();
  });
});

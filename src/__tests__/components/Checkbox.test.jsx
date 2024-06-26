import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Checkbox } from "../../components";

const baseProps = {
  label: "Show details",
  onChange: jest.fn(),
  value: true,
};

const renderComponent = (customProps) => {
  const props = { ...baseProps, ...customProps };

  return render(<Checkbox {...props} />);
};

describe("<Checkbox />", () => {
  it("renders without crashing", () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
  });

  it("should render the label", () => {
    renderComponent();
    expect(screen.getByText(baseProps.label)).toBeInTheDocument();
  });

  it("should call onChange handler when checkbox is clicked", () => {
    const onChangeMock = jest.fn();
    renderComponent({ onChange: onChangeMock });

    fireEvent.click(screen.getByTestId("checkbox"));

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});

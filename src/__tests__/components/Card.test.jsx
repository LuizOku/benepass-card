import React from "react";

import { render, screen } from "@testing-library/react";

import { formatCardNumber } from "../../utils/format";
import { Card } from "../../components";

import "../../setupTests";

const baseProps = {
  number: "1232222344321732",
  type: "virtual",
  validThru: "08/28",
  cvc: "345",
  zip: "66062",
};

const renderComponent = (customProps) => {
  const props = { ...baseProps, ...customProps };

  return render(<Card {...props} />);
};

describe("<Card />", () => {
  it("renders without crashing", () => {
    const view = renderComponent({ shouldShowDetails: true });
    expect(view).toMatchSnapshot();
  });

  it("should render the card logo", () => {
    renderComponent({ shouldShowDetails: true });
    expect(screen.getByTestId("card-logo")).toBeInTheDocument();
  });

  it("should render the visa image", () => {
    renderComponent({ shouldShowDetails: true });
    expect(screen.getByTestId("visa-img")).toBeInTheDocument();
  });

  it("should render the card type", () => {
    renderComponent({ shouldShowDetails: true });
    expect(screen.getByText(baseProps.type)).toBeInTheDocument();
  });

  it("should render the card number", () => {
    renderComponent({ shouldShowDetails: true });
    expect(
      screen.getByText(formatCardNumber(baseProps.number))
    ).toBeInTheDocument();
  });

  it("should render the card valid thru", () => {
    renderComponent({ shouldShowDetails: true });
    expect(screen.getByText(baseProps.validThru)).toBeInTheDocument();
  });

  it("should render the card cvc", () => {
    renderComponent({ shouldShowDetails: true });
    expect(
      screen.getByText(formatCardNumber(baseProps.cvc))
    ).toBeInTheDocument();
  });

  it("should render the card zip", () => {
    renderComponent({ shouldShowDetails: true });
    expect(screen.getByText(`ZIP ${baseProps.zip}`)).toBeInTheDocument();
  });

  it("should hide the card number when show details is false", () => {
    renderComponent({ shouldShowDetails: false });
    expect(
      screen.queryByText(formatCardNumber(baseProps.number))
    ).not.toBeInTheDocument();
  });

  it("should hide the cvc when show details is false", () => {
    renderComponent({ shouldShowDetails: false });
    expect(screen.queryByText(baseProps.cvc)).not.toBeInTheDocument();
  });
});

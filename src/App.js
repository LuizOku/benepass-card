import React, { useState, useCallback } from "react";
import { Card, Checkbox } from "./components";

const MOCK_CARD = {
  number: "1232222344321732",
  type: "virtual",
  validThru: "08/28",
  cvc: "345",
  zip: "66062",
};

function App() {
  const [shouldShowDetails, setSetshouldShowDetails] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    setSetshouldShowDetails(!shouldShowDetails);
  }, [shouldShowDetails]);

  return (
    <div className="w-full min-h-screen p-6 sm:py-[60px] sm:px-[55px] flex flex-col">
      <h1 className="text-[26px] leading-8 font-medium">Flex Card</h1>
      <span className="text-xl leading-8 font-normal mb-8">
        Used for pre-tax purchases
      </span>
      <Card {...MOCK_CARD} shouldShowDetails={shouldShowDetails} />
      <Checkbox
        className="mt-4"
        label="Show details"
        value={shouldShowDetails}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;

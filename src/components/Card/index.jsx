import React, { useMemo } from "react";
import Logo from "../../assets/images/Logo.svg";
import Visa from "../../assets/images/Visa.svg";
import { formatCardNumber } from "../../utils/format";

function Card({ number, type, validThru, cvc, zip, shouldShowDetails }) {
  const memoizedNumber = useMemo(() => {
    if (shouldShowDetails) {
      return formatCardNumber(number);
    }
    return `●●●● ${number.slice(-4)}`;
  }, [shouldShowDetails, number]);

  const memoizedCVC = useMemo(() => {
    return shouldShowDetails ? cvc : "●●●";
  }, [shouldShowDetails, cvc]);

  return (
    <div
      data-testid="card-component"
      className="bg-card bg-cover rounded-xl p-6 sm:w-[392px] h-[272px] min-w-[310px] flex flex-col transition-all duration-500 md:hover:scale-105"
    >
      <div className="w-full flex items-center justify-between mb-6">
        <img
          data-testid="card-logo"
          src={Logo}
          alt="Logo"
          className="w-[121px] h-8 object-cover"
        />
        <span className="px-3 py-1 rounded-full bg-white capitalize text-base font-medium text-brand-indigo-100">
          {type}
        </span>
      </div>
      <span className="text-[26px] leading-8 text-white">{memoizedNumber}</span>
      <div className="mt-6 flex flex-row items-center justify-between w-1/2">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-white">VALID THRU</span>
          <span className="text-[18px] leading-6 font-medium text-white">
            {validThru}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-white">CVC</span>
          <span className="text-[18px] leading-6 font-medium text-white">
            {memoizedCVC}
          </span>
        </div>
      </div>
      <div className="flex-grow"></div>

      <div className="w-full flex items-center justify-between">
        <span className="text-[18px] leading-6 font-normal text-white">
          {`ZIP ${zip}`}
        </span>
        <img
          data-testid="visa-img"
          src={Visa}
          alt="Visa"
          className="w-[54px] h-[18px] object-cover"
        />
      </div>
    </div>
  );
}

export default Card;

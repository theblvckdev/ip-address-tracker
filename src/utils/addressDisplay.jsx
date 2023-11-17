import React, { useContext } from "react";
import { MapContext } from "../context/mapContext";

const AddressDisplay = () => {
  const { address } = useContext(MapContext);

  return (
    <>
      <div className="bg-white w-full rounded-[15px] p-7 overflow-hidden shadow-xl flex md:flex-row flex-col md:gap-x-7 gap-y-5 md:text-left text-center">
        <div className="basis-1/4 md:border-r border-0 border-gray-200">
          <div className="text-gray-400 text-[13px] font-medium uppercase">
            Ip address
          </div>
          <h3 className="text-gray-900 font-medium md:text-[27px] text-[20px]">
            {address.ip}
          </h3>
        </div>
        <div className="basis-1/4 md:border-r border-0 border-gray-200">
          <div className="text-gray-400 text-[13px] font-medium uppercase">
            Location
          </div>
          <h3 className="text-gray-900 font-medium md:text-[27px] text-[20px]">
            {address.location.city}, {address.location.region}
          </h3>
        </div>
        <div className="basis-1/4 md:border-r border-0 border-gray-200">
          <div className="text-gray-400 text-[13px] font-medium uppercase">
            Timezone
          </div>
          <h3 className="text-gray-900 font-medium md:text-[27px] text-[20px]">
            UTC {address.location.timezone}
          </h3>
        </div>{" "}
        <div className="basis-1/4 border-gray-200">
          <div className="text-gray-400 text-[13px] font-medium uppercase">
            Isp
          </div>
          <h3 className="text-gray-900 font-medium md:text-[27px] text-[20px]">
            {address.isp}
          </h3>
        </div>
      </div>
    </>
  );
};

export default AddressDisplay;

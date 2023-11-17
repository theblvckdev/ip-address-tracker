import React, { useContext } from "react";
import FormControl from "../utils/formControl";
import Button from "../utils/button";
import arrowIcon from "../assets/images/icon-arrow.svg";
import AddressDisplay from "../utils/addressDisplay";
import { MapContext } from "../context/mapContext";

const Banner = () => {
  const {
    getEnteredData,
    addressSearch,
    setSearchValue,
    setAddressSearch,
    address,
  } = useContext(MapContext);

  const handleSubmit = () => {
    getEnteredData();
    setAddressSearch("");
  };

  return (
    <>
      <section className="h-[40vh] relative md:bg-desktop bg-mobile bg-cover bg-no-repeat">
        <div className="w-full md:pt-10 pt-5">
          <h1 className="text-white font-medium text-center md:text-3xl text-[27px]">
            IP Address Tracker
          </h1>
          <div className="md:mt-5 mt-3 md:w-[35%] w-[90%] mx-auto">
            <div className="flex">
              <FormControl
                type={"text"}
                placeholder={"Search for any IP address or domain"}
                value={addressSearch}
                onChange={setSearchValue}
              />
              <Button
                rounded={"rounded-r-[15px]"}
                text={<img src={arrowIcon} alt="arrow icon svg" />}
                onClick={handleSubmit}
              />
            </div>
          </div>

          <div className="absolute z-50 w-full top-[100%] md:-translate-y-[50%] -translate-y-[38%]">
            <div className="md:w-[76%] w-[90%] mx-auto">
              {address && <AddressDisplay />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

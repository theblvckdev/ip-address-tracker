import { createContext, useEffect, useState } from "react";
import { myApiKey } from "../apikey";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [addressSearch, setAddressSearch] = useState("");
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&ipAddress=8.8.8.8`
        );
        const data = await res.json();
        setAddress(data);
      };

      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  const getEnteredData = async () => {
    const res = await fetch(`
  https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&${
      checkIpAddress.test(addressSearch)
        ? `ipAddress=${addressSearch}`
        : checkDomain.test(addressSearch)
        ? `domain=${addressSearch}`
        : ""
    }`);
    const data = await res.json();
    setAddress(data);
  };

  const setSearchValue = (e) => {
    setAddressSearch(e.target.value);
  };

  return (
    <MapContext.Provider
      value={{
        address,
        addressSearch,
        setSearchValue,
        setAddressSearch,
        getEnteredData,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

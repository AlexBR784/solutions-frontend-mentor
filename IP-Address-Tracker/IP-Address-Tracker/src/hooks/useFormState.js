import { useEffect, useState } from "react";

export const useFormState = () => {
  const [inputState, setInputState] = useState("");
  const [searchState, setSearchState] = useState("");
  const [trackerState, setTrackerState] = useState({
    ip: "192.212.174.101",
    location: {
      country: "US",
      region: "California",
      city: "South San Gabriel",
      timezone: "-08:00",
      lat: 34.04915,
      lng: -118.09462,
    },
    isp: "Southern California Edison",
  });

  const getLocationByIP = async () => {
    const resp = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_cDM6eQOj2pPs2XBcG2CKJ3TBzUFcw&ipAddress=${searchState}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    const data = await resp.json();
    setTrackerState(data);
    console.log(JSON.stringify(data));
  };

  const validIP = (ip) => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ip
      )
    ) {
      return true;
    }
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "You entered an invalid IP.",
      footer:
        '<a href="https://en.wikipedia.org/wiki/IPv4">Check info about IPv4</a>',
    });
    return false;
  };

  useEffect(() => {
    if (searchState.length > 0 && validIP(searchState)) getLocationByIP();
  }, [searchState]);

  return {
    inputState,
    setInputState,
    searchState,
    setSearchState,
    trackerState,
  };
};

import React, { FormEvent, useRef } from "react";
import { Map } from "./components/Map";
import { useFormState } from "./hooks/useFormState";
export const TrackerApp = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputState, setInputState, setSearchState, trackerState } =
    useFormState();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if ((inputRef.current as HTMLInputElement).value.trim().length > 1)
      setSearchState((inputRef.current as HTMLInputElement).value);
  };

  const onInput = (e: FormEvent) => {
    setInputState((e.target as HTMLInputElement).value);
  };

  return (
    <main>
      <div className="infoContainer">
        <h1>IP Address Tracker</h1>
        <form onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            onChange={onInput}
            value={inputState}
            placeholder={"Example: 192.212.174.101"}
          />
          <button type="submit">{">"}</button>
        </form>
        <div className="info">
          <div className="infoDetail">
            <p className="infoLabel">IP ADDRESS</p>
            <p className="infoContent">{trackerState.ip}</p>
          </div>
          <span className="vertical" />
          <div className="infoDetail">
            <p className="infoLabel">LOCATION</p>
            <p className="infoContent">
              {trackerState.location.city + ", " + trackerState.location.region}
            </p>
          </div>
          <span className="vertical" />
          <div className="infoDetail">
            <p className="infoLabel">TIMEZONE</p>
            <p className="infoContent">UTC {trackerState.location.timezone}</p>
          </div>
          <span className="vertical" />
          <div className="infoDetail">
            <p className="infoLabel">ISP</p>
            <p className="infoContent">{trackerState.isp}</p>
          </div>
        </div>
      </div>
      <div className="firstSection"></div>

      <Map {...trackerState} />
    </main>
  );
};

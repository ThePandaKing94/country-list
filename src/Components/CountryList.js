import { useCallback } from "react";
import { kmToMileSq } from "./codingTask.service";
import "./style.scss";
const CountryList = ({ countryList }) => {
  const formatInMillion = useCallback(
    (population) => (population / 1000000).toFixed(1),
    []
  );

  return (
    <div className="country-list">
      <div className="column">
        <div className="tableContainerHeader">
          <div className="tableInfoHeader">Name</div>
          <div className="tableInfoHeader">Region</div>
          <div className="tableInfoHeader">Area</div>
          <div className="tableInfoHeader">Population</div>
        </div>
      </div>
      <div className="row">
        {countryList.map((country) => (
          <div className="tableContainer" key={country.name.common}>
            <div className="tableInfo">{country.name.common}</div>
            <div className="tableInfo">{country.region}</div>
            <div className="tableInfo">{kmToMileSq(country.area)} km</div>
            <div className="tableInfo">
              {formatInMillion(country.population)} million
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;

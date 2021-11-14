import React, { useEffect, useState, useMemo } from "react";
import CountryList from "./CountryList";
import FilterList from "./FilterList";
import Summary from "./Summary";
import {
  sortList,
  getAveragePopulation,
  getExtremaArea,
} from "./codingTask.service";
function CodingTask() {
  const [countryList, setCountryList] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const getCountry = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const dataJson = await data.json();
      setCountryList(dataJson);
    } catch (error) {
      console.log(error);
    }
  };

  const averagePopulation = useMemo(() => getAveragePopulation(countryList), [
    countryList,
  ]);
  const largestArea = useMemo(() => getExtremaArea(countryList, "large"), [
    countryList,
  ]);
  const smallestArea = useMemo(() => getExtremaArea(countryList, "small"), [
    countryList,
  ]);

  useEffect(() => {
    if (selectedSort !== "" && countryList.length > 0) {
      const newList = sortList(countryList, selectedSort);
      setCountryList(newList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSort]);

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <React.Fragment>
      <FilterList
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <CountryList countryList={countryList} />
      <Summary
        averagePopulation={averagePopulation}
        largestArea={largestArea}
        smallestArea={smallestArea}
      />
    </React.Fragment>
  );
}

export default CodingTask;

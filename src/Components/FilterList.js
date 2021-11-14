import "./style.scss";
const FilterList = ({ selectedSort, setSelectedSort }) => {
  const handleChange = (select) => {
    if (select !== selectedSort) {
      setSelectedSort(select);
    }
  };
  return (
    <div className="sticky">
      <h1>Sort By</h1>
      <div>
        <div
          className="btnOnclick"
          onClick={() => {
            handleChange("name");
          }}
        >
          Name
        </div>
        <div className="btnOnclick" onClick={() => handleChange("population")}>
          Population
        </div>
        <div className="btnOnclick" onClick={() => handleChange("area")}>
          Area
        </div>
      </div>
    </div>
  );
};

export default FilterList;

export const sortList = (arr, property) => {
  const sorted = [...arr];
  if (property === "area" || property === "population") {
    sorted.sort((a, b) => {
      return a[property] - b[property];
    });
  } else if (property === "name") {
    sorted.sort((a, b) => {
      return a[property].common.localeCompare(b[property].common);
    });
  }

  return sorted;
};

export const getAveragePopulation = (arr) => {
  const sum = arr.reduce((acc, el) => {
    return acc + el.population;
  }, 0);

  if (arr.length > 0) {
    return Math.round(sum / (arr.length * 1000000));
  }
  return 0;
};

export const getExtremaArea = (arr, criteria) => {
  if (arr.length === 0) return 0;
  let extremaArea = arr[0].area;
  arr.forEach((el) => {
    if (criteria === "large" && el.area > extremaArea) {
      extremaArea = el.area;
    } else if (criteria === "small" && el.area < extremaArea) {
      extremaArea = el.area;
    }
  });
  return extremaArea;
};

export const kmToMileSq = (mtSq) => Math.round(mtSq / Math.pow(1.609344, 2));

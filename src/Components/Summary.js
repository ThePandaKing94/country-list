import { kmToMileSq } from "./codingTask.service";
const Summary = ({ averagePopulation, largestArea, smallestArea }) => {
  return (
    <div className="txtInfo">
      <p>Average population {averagePopulation}: Million</p>
      <p>Largest area {kmToMileSq(largestArea)}: Miles</p>
      <p>Smallest area {kmToMileSq(smallestArea)}: Miles</p>
    </div>
  );
};

export default Summary;
